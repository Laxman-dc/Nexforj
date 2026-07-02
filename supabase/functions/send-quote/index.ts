// @ts-nocheck
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { Resend } from "npm:resend"

const resend = new Resend(Deno.env.get("RESEND_API_KEY"))

serve(async (req) => {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    } })
  }

  try {
    const { record } = await req.json()

    // Assuming you have file URLs in the record as an array of strings
    const fileUrlsList = record.file_urls && record.file_urls.length > 0 
      ? record.file_urls.map(url => `<li><a href="${url}">${url}</a></li>`).join('')
      : '<li>No files uploaded</li>'

    const emailHtml = `
      <h2>New Project Quote Request</h2>
      <p><strong>Name:</strong> ${record.first_name} ${record.last_name}</p>
      <p><strong>Email:</strong> ${record.email}</p>
      <p><strong>Phone:</strong> ${record.phone}</p>
      <p><strong>Company:</strong> ${record.company || 'N/A'}</p>
      <p><strong>Material:</strong> ${record.material}</p>
      <p><strong>Process:</strong> ${record.process}</p>
      <p><strong>Service:</strong> ${record.service || 'N/A'}</p>
      <p><strong>Quantity:</strong> ${record.quantity}</p>
      <p><strong>Notes:</strong> ${record.notes || 'N/A'}</p>
      
      <h3>Uploaded Files:</h3>
      <ul>
        ${fileUrlsList}
      </ul>
    `

    const data = await resend.emails.send({
      from: 'Nexforj Quotes <onboarding@resend.dev>', // Update this if you have a verified domain
      to: 'nextforgepraimo@gmail.com',
      subject: `New Quote Request from ${record.first_name} ${record.last_name}`,
      html: emailHtml,
    })

    return new Response(JSON.stringify(data), {
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      status: 200,
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      status: 400,
    })
  }
})
