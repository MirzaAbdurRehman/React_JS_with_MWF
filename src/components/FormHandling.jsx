import React, { useState } from 'react'

const FormHandling = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [agree, setAgree] = useState(false);
  const [submitted, setSubmitted] = useState(null);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!firstName.trim()) newErrors.firstName = 'First Name is required';
    if (!lastName.trim()) newErrors.lastName = 'Last Name is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';
    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (!confirmPassword) newErrors.confirmPassword = 'Confirm Password is required';
    if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (!phone.trim()) newErrors.phone = 'Phone Number is required';
    if (!agree) newErrors.agree = 'You must agree to the terms and conditions';

    return newErrors;                          
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const formData = { firstName, lastName, email, password, phone, agree };
    console.log('Sign Up Successful', formData);
    setSubmitted(formData);
    setErrors({});
  };

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    },
    formWrapper: {
      background: '#0f3460',
      padding: '40px',
      borderRadius: '10px',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
      maxWidth: '500px',
      width: '100%'
    },
    heading: {
      color: '#00d4ff',
      textAlign: 'center',
      marginBottom: '30px',
      fontSize: '28px',
      fontWeight: 'bold'
    },
    formGroup: {
      marginBottom: '20px'
    },
    label: {
      display: 'block',
      color: '#e0e0e0',
      marginBottom: '8px',
      fontSize: '14px',
      fontWeight: '500'
    },
    input: {
      width: '100%',
      padding: '12px',
      border: '2px solid #16213e',
      borderRadius: '5px',
      backgroundColor: '#1a1a2e',
      color: '#e0e0e0',
      fontSize: '14px',
      boxSizing: 'border-box',
      transition: 'border-color 0.3s',
      outline: 'none'
    },
    inputFocus: {
      borderColor: '#00d4ff'
    },
    error: {
      color: '#ff6b6b',
      fontSize: '12px',
      marginTop: '5px'
    },
    checkboxWrapper: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '20px'
    },
    checkbox: {
      width: '18px',
      height: '18px',
      marginRight: '10px',
      cursor: 'pointer',
      accentColor: '#00d4ff'
    },
    checkboxLabel: {
      color: '#e0e0e0',
      fontSize: '14px',
      cursor: 'pointer'
    },
    button: {
      width: '100%',
      padding: '12px',
      background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'transform 0.2s, box-shadow 0.2s',
      marginTop: '10px'
    },
    buttonHover: {
      transform: 'translateY(-2px)',
      boxShadow: '0 5px 20px rgba(0, 212, 255, 0.4)'
    },
    successBox: {
      background: '#1a472a',
      border: '2px solid #2ecc71',
      color: '#2ecc71',
      padding: '20px',
      borderRadius: '5px',
      marginTop: '30px'
    },
    successHeading: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '15px'
    },
    successData: {
      color: '#90ee90',
      fontSize: '14px',
      marginBottom: '8px'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formWrapper}>
        <h2 style={styles.heading}>✨ Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label htmlFor="firstName" style={styles.label}>First Name *</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              style={styles.input}
              placeholder="Enter your first name"
            />
            {errors.firstName && <div style={styles.error}>{errors.firstName}</div>}
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="lastName" style={styles.label}>Last Name *</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              style={styles.input}
              placeholder="Enter your last name"
            />
            {errors.lastName && <div style={styles.error}>{errors.lastName}</div>}
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>Email Address *</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              placeholder="Enter your email"
            />
            {errors.email && <div style={styles.error}>{errors.email}</div>}
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="phone" style={styles.label}>Phone Number *</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={styles.input}
              placeholder="Enter your phone number"
            />
            {errors.phone && <div style={styles.error}>{errors.phone}</div>}
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="password" style={styles.label}>Password *</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              placeholder="Enter your password"
            />
            {errors.password && <div style={styles.error}>{errors.password}</div>}
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="confirmPassword" style={styles.label}>Confirm Password *</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={styles.input}
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && <div style={styles.error}>{errors.confirmPassword}</div>}
          </div>

          <div style={styles.checkboxWrapper}>
            <input
              type="checkbox"
              id="agree"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              style={styles.checkbox}
            />
            <label htmlFor="agree" style={styles.checkboxLabel}>
              I agree to the Terms & Conditions *
            </label>
          </div>
          {errors.agree && <div style={styles.error}>{errors.agree}</div>}

          <button
            type="submit"
            style={styles.button}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 5px 20px rgba(0, 212, 255, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            Create Account
          </button>
        </form>

        {submitted && (
          <div style={styles.successBox}>
            <div style={styles.successHeading}>✅ Account Created Successfully!</div>
            <div style={styles.successData}>
              <strong>Name:</strong> {submitted.firstName} {submitted.lastName}
            </div>
            <div style={styles.successData}>
              <strong>Email:</strong> {submitted.email}
            </div>
            <div style={styles.successData}>
              <strong>Phone:</strong> {submitted.phone}
            </div>
            <div style={styles.successData}>
              <strong>Status:</strong> Account verified ✓
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormHandling
