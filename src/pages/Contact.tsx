import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  })

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  const handleBlur = (field: string) => {
    if (!formData[field as keyof typeof formData]) {
      setErrors(prev => ({ ...prev, [field]: 'This field is required' }))
    } else if (field === 'email' && !validateEmail(formData.email)) {
      setErrors(prev => ({ ...prev, email: 'Invalid email format' }))
    } else {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // For now we’ll just log the data
    console.log('Submitted:', formData)
    alert('Message submitted (mock)!')

    // Clear form
    setFormData({ name: '', email: '', message: '' })
    setErrors({ name: '', email: '', message: '' })
  }

  return (
    <section>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            onBlur={() => handleBlur('name')}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={() => handleBlur('email')}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            onBlur={() => handleBlur('message')}
          />
          {errors.message && <span className="error">{errors.message}</span>}
        </div>

        <button type="submit">Send</button>
      </form>
    </section>
  )
}

export default Contact
