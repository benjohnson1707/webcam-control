import React, { useState } from 'react';
import './App.css';

function App() {
    const [status, setStatus] = useState('Off'); // Initial status
    const [loading, setLoading] = useState(false); // Loading state for button

    // Function to toggle the webcam
    const toggleWebcam = async () => {
        setLoading(true); // Set loading state
        try {
            const response = await fetch('http://localhost:5000/toggle-webcam', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            setStatus(data.status); // Update status based on response
        } catch (error) {
            console.error('Error toggling webcam:', error);
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    return (
        <div style={styles.container}>
            <h1>Webcam Control</h1>
            <button onClick={toggleWebcam} disabled={loading} style={styles.button}>
                {loading ? 'Processing...' : status === 'On' ? 'Turn Off Webcam' : 'Turn On Webcam'}
            </button>
            <p style={styles.status}>Camera Status: <strong>{status}</strong></p>
        </div>
    );
}

// Styles for the component
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        margin: '20px 0',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#007bff',
        color: 'white',
        transition: 'background-color 0.3s',
    },
    status: {
        fontSize: '18px',
    },
};

export default App;
