import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { UploadCloud, CheckCircle2, ArrowRight, ArrowLeft, X, Factory, Cog, PenTool, Ruler, Wrench, Compass, Box } from 'lucide-react'
import Button from '../../components/common/Button.jsx'
import CountrySelect from '../../components/common/CountrySelect/CountrySelect.jsx'
import { COUNTRY_CODES } from '../../data/countries.js'
import './ContactPage.css'

const STEPS = [
  { id: 'contact', title: 'Your Details' },
  { id: 'part', title: 'Part Specs' },
  { id: 'file', title: 'Upload Files' }
]

const materialsList = ['Aluminium', 'Mild Steel', 'Stainless Steel', 'Wood', 'Plastic', 'Titanium', 'Brass', 'Custom...']
const processList = ['CNC Machining', '3D Printing', 'Sheet Metal', 'Laser Cutting', 'Waterjet Cutting', 'Custom...']
const serviceList = ['Anodizing', 'Powder Coating', 'Plating', 'Heat Treatment', 'Assembly', 'Custom...']

export default function ContactPage() {
  const [step, setStep] = useState(0)
  const [country, setCountry] = useState(COUNTRY_CODES.find(c => c.country.startsWith('United States')))
  
  const [matPlaceholderIdx, setMatIdx] = useState(0);
  const [procPlaceholderIdx, setProcIdx] = useState(0);
  const [svcPlaceholderIdx, setSvcIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMatIdx(i => (i + 1) % materialsList.length);
      setProcIdx(i => (i + 1) % processList.length);
      setSvcIdx(i => (i + 1) % serviceList.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    material: '',
    process: '',
    service: '',
    quantity: '',
    notes: '',
    files: []
  })
  
  const [errors, setErrors] = useState({})
  
  const validateStep = () => {
    const newErrors = {}
    if (step === 0) {
      if (!formData.firstName) newErrors.firstName = 'Required'
      if (!formData.lastName) newErrors.lastName = 'Required'
      if (!formData.email) newErrors.email = 'Required'
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email'
      
      if (!formData.phone) newErrors.phone = 'Required'
      else if (country.pattern && !country.pattern.test(formData.phone.replace(/\s+/g, ''))) {
        newErrors.phone = 'Invalid format for ' + country.country
      }
    } else if (step === 1) {
      if (!formData.material) newErrors.material = 'Required'
      if (!formData.process) newErrors.process = 'Required'
      if (!formData.quantity) newErrors.quantity = 'Required'
    } else if (step === 2) {
      if (formData.files.length === 0) newErrors.files = 'Please select at least one file'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (validateStep()) {
      setStep(s => Math.min(STEPS.length, s + 1))
    }
  }

  const prevStep = () => {
    setStep(s => Math.max(0, s - 1))
  }

  const handleDrop = (e) => {
    e.preventDefault()
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFormData(prev => ({ ...prev, files: [...prev.files, ...Array.from(e.dataTransfer.files)] }))
      setErrors(prev => ({ ...prev, files: null }))
    }
  }

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData(prev => ({ ...prev, files: [...prev.files, ...Array.from(e.target.files)] }))
      setErrors(prev => ({ ...prev, files: null }))
    }
  }

  const removeFile = (index) => {
    setFormData(prev => ({ ...prev, files: prev.files.filter((_, i) => i !== index) }))
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }))
    }
  }

  const handlePhoneChange = (e) => {
    const val = e.target.value.replace(/[^\d\s-]/g, '')
    handleChange({ target: { name: 'phone', value: val } })
  }

  return (
    <div className="contact-page">
      <section className="section contact-split-section">
        <div className="container contact-split">
          
          <div className="contact-split__left">
            {/* SVG Filter to make icons look like hand-drawn sketches */}
            <svg style={{ width: 0, height: 0, position: 'absolute' }}>
              <filter id="sketch-filter">
                <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G" />
              </filter>
            </svg>

            {/* Scattered Sketch Doodles */}
            <Compass className="contact-doodle doodle-1" strokeWidth={0.75} />
            <Cog className="contact-doodle doodle-2" strokeWidth={1} />
            <PenTool className="contact-doodle doodle-3" strokeWidth={1.5} />
            <Ruler className="contact-doodle doodle-4" strokeWidth={1} />
            <Wrench className="contact-doodle doodle-5" strokeWidth={1} />
            <Box className="contact-doodle doodle-6" strokeWidth={0.75} />
            <Factory className="contact-doodle doodle-7" strokeWidth={1} />

            <span className="contact-eyebrow">Start a Project</span>
            <h1 className="contact-title">Send us your drawing</h1>
            <p className="contact-lead">
              Our engineers review every file for manufacturability and will email you a clear, itemized quote.
            </p>
          </div>

          <div className="contact-split__right">
            <div className="quote-form-card">
              <div className="step-bar">
                {STEPS.map((s, i) => (
                  <div key={s.id} className={`step-item ${i <= step ? 'active' : ''} ${i === step ? 'current' : ''}`}>
                    <div className="step-num">{i + 1}</div>
                    <div className="step-title">{s.title}</div>
                  </div>
                ))}
              </div>

              <div className="form-content">
                <AnimatePresence mode="wait">
                  {step === 0 && (
                    <motion.div key="step0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                      <div className="form-grid">
                        <div className="form-group">
                          <label>First Name</label>
                          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className={errors.firstName ? 'error' : ''} />
                          {errors.firstName && <span className="error-msg">{errors.firstName}</span>}
                        </div>
                        <div className="form-group">
                          <label>Last Name</label>
                          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className={errors.lastName ? 'error' : ''} />
                          {errors.lastName && <span className="error-msg">{errors.lastName}</span>}
                        </div>
                        <div className="form-group full-width">
                          <label>Email Address</label>
                          <input type="email" name="email" value={formData.email} onChange={handleChange} className={errors.email ? 'error' : ''} />
                          {errors.email && <span className="error-msg">{errors.email}</span>}
                        </div>
                        <div className="form-group full-width">
                          <label>Phone Number</label>
                          <div className="form-cc-wrap">
                            <CountrySelect options={COUNTRY_CODES} value={country} onChange={setCountry} />
                            <input type="tel" name="phone" placeholder={country.placeholder || '1234567890'} value={formData.phone} onChange={handlePhoneChange} className={`form-phone-input ${errors.phone ? 'error' : ''}`} />
                          </div>
                          {errors.phone && <span className="error-msg">{errors.phone}</span>}
                        </div>
                        <div className="form-group full-width">
                          <label>Company (Optional)</label>
                          <input type="text" name="company" value={formData.company} onChange={handleChange} />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {step === 1 && (
                    <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                      <div className="form-grid">
                        
                        <div className="form-group full-width">
                          <label>Material</label>
                          <input 
                            type="text"
                            name="material" 
                            placeholder={`e.g., ${materialsList[matPlaceholderIdx]}`}
                            value={formData.material} 
                            onChange={handleChange} 
                            className={errors.material ? 'error' : ''} 
                            autoComplete="off"
                          />
                          {errors.material && <span className="error-msg">{errors.material}</span>}
                        </div>

                        <div className="form-group full-width">
                          <label>Manufacturing Process</label>
                          <input 
                            type="text"
                            name="process" 
                            placeholder={`e.g., ${processList[procPlaceholderIdx]}`}
                            value={formData.process} 
                            onChange={handleChange} 
                            className={errors.process ? 'error' : ''} 
                            autoComplete="off"
                          />
                          {errors.process && <span className="error-msg">{errors.process}</span>}
                        </div>

                        <div className="form-group full-width">
                          <label>Additional Services / Finishing (Optional)</label>
                          <input 
                            type="text"
                            name="service" 
                            placeholder={`e.g., ${serviceList[svcPlaceholderIdx]}`}
                            value={formData.service} 
                            onChange={handleChange} 
                            autoComplete="off"
                          />
                        </div>

                        <div className="form-group full-width">
                          <label>Quantity</label>
                          <input type="number" name="quantity" min="1" value={formData.quantity} onChange={handleChange} className={errors.quantity ? 'error' : ''} />
                          {errors.quantity && <span className="error-msg">{errors.quantity}</span>}
                        </div>
                        <div className="form-group full-width">
                          <label>Notes / Special Requirements (Optional)</label>
                          <textarea name="notes" rows="3" value={formData.notes} onChange={handleChange} placeholder="Tolerances, finishes, timeline..."></textarea>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                      <div className="form-group full-width">
                        <label>Upload CAD or Drawings</label>
                        <div 
                          className={`dropzone ${errors.files ? 'error' : ''}`}
                          onDragOver={(e) => e.preventDefault()}
                          onDrop={handleDrop}
                        >
                          <UploadCloud size={48} className="dropzone-icon" />
                          <p className="dropzone-text">Drag and drop your files here, or click to browse</p>
                          <p className="dropzone-hint">Accepts STEP, IGES, DXF, DWG, STL, PDF (Max 50MB per file)</p>
                          <input type="file" multiple className="file-input" onChange={handleFileChange} />
                        </div>
                        {errors.files && <span className="error-msg">{errors.files}</span>}

                        {formData.files.length > 0 && (
                          <div className="file-list">
                            {formData.files.map((f, idx) => (
                              <div className="file-info" key={idx}>
                                <div className="file-info__left">
                                  <span className="file-name">{f.name}</span>
                                  <span className="file-size">{(f.size / 1024 / 1024).toFixed(2)} MB</span>
                                </div>
                                <button className="file-remove" type="button" onClick={() => removeFile(idx)}>
                                  <X size={16} />
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div key="step3" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="success-state">
                      <CheckCircle2 size={64} className="success-icon" />
                      <h3>Files Received</h3>
                      <p>Thanks {formData.firstName}. Our engineers are reviewing your {formData.files.length} file(s). We'll send a quote to {formData.email} shortly.</p>
                      <Button to="/" variant="soft">Return Home</Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {step < 3 && (
                <div className="form-actions">
                  {step > 0 ? (
                    <Button type="button" variant="ghost" onClick={prevStep}><ArrowLeft size={16} /> Back</Button>
                  ) : <div></div>}
                  <Button type="button" onClick={nextStep}>
                    {step === 2 ? 'Submit Request' : 'Continue'} {step < 2 && <ArrowRight size={16} />}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
