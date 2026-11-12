import { Link } from 'react-router-dom'
import { useState } from 'react'
import './AuthPages.css'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Login:', { email, password })
  }

  return (
    <div className="auth-page">
      <div style={{height: '80px'}}></div>

      <section className="auth-section">
        <div className="auth-container">
          <div className="auth-card">
            <h1 className="auth-title">Client Login</h1>
            <p className="auth-subtitle">
              Access your consignment account to track shipments and view account details.
            </p>

            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                />
              </div>

              <div className="auth-remember">
                <label>
                  <input type="checkbox" /> Remember me
                </label>
                <Link to="#forgot" className="btn-link">Forgot password?</Link>
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Sign In
              </button>
            </form>

            <div className="auth-divider">
              <span>New to Kestrel Security?</span>
            </div>

            <p className="auth-signup">
              <a href="https://kerselsecuritycompany.vercel.app/register" className="btn btn-outline btn-block">
                Create Account
              </a>
            </p>

            <p className="auth-contact">
              Need help? <Link to="/contact">Contact our team</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
