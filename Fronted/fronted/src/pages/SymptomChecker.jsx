import React, { useState } from 'react';
import axios from 'axios';

const SymptomChecker = () => {
  const [symptoms, setSymptoms] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await axios.post('/api/symptom-checker', { symptoms });
      setDiagnosis(response.data.diagnosis);
    } catch (err) {
      setError('Unable to get diagnosis. Please try again later.');
    }
    setLoading(false);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">AI Symptom Checker</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          placeholder="Describe your symptoms..."
          className="w-full p-2 border rounded h-32"
          required
        ></textarea>
        <button type="submit" className="bg-primary text-white px-4 py-2 rounded">
          Check Symptoms
        </button>
      </form>
      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {diagnosis && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <h3 className="font-semibold">Diagnosis:</h3>
          <p>{diagnosis}</p>
        </div>
      )}
    </div>
  );
};

export default SymptomChecker;
