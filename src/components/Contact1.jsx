import {useState} from 'react';

const Contact1 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }
  return (
    <div className="container mx-auto my-auto">
      
    <div className="flex flex-col lg:flex-row items-center justify-center gap-0">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="h2 text-3xl font-bold text-pink-500 font-secondary">GET IN TOUCH</h2>
          <h1 className="h1 text-5xl font-bold  font-tertiary">
            Let's work
            <br />
            together!
          </h1>
        </div>
        <div className="lg:w-1/2 w-full max-w-md">
          <form onSubmit={handleSubmit} className="bg-transparent rounded-lg p-8 shadow-lg">
            <div className="mb-6">
              <label htmlFor="name" className="block text-md font-medium mb-2">Your name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-600 focus:border-pink-500 outline-none py-2"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-md font-medium mb-2">Your email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-600 focus:border-pink-500 outline-none py-2"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-md font-medium mb-2">Your message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full bg-transparent border-b border-gray-600 focus:border-pink-500 outline-none py-2"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-lg"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
      </div>

  )
};

export default Contact1;
