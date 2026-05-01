import React from "react";
import { useNavigate } from "react-router-dom";
import "./Apply.css";

export default function Apply() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    FullName: "",
    EmailAddress: "",
    LoanAmount: "",
    LoanTenure: "",
    PurposeOfLoan: "",

  });
const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData["Full Name"] || !formData["Email Address"] || !formData["Loan Amount"] || !formData["Loan Tenure"] || !formData["Purpose of Loan"]) {
      setError("Please fill in all fields");
      return;
    }

    if (isNaN(formData["Loan Amount"]) || formData["Loan Amount"] <= 0) {
      setError("Please enter a valid loan amount");
      return;
    }

    if (isNaN(formData["Loan Tenure"]) || formData["Loan Tenure"] <= 0) {
      setError("Please enter a valid loan tenure");
      return;
    } 

    setLoading(true);

    try {
      const response = await fetch("https://loanaptech-q8us.onrender.com/api/loans/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify({
          fullName: formData["Full Name"],
          email: formData["Email Address"],
          loanAmount: formData["Loan Amount"],
          loanTenure: formData["Loan Tenure"],
          purposeOfLoan: formData["Purpose of Loan"]
        })
      });

      const data = await response.json();

      if (response.ok) {
        alert("Loan application submitted successfully!");
        navigate("/dashboard");
      } else {
        setError(data.message || "Failed to submit loan application");
      }
      
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="apply-container">
      <div className="apply-card">
        <div className="apply-title">
          <h2>Apply for a Loan</h2>
        </div>
        {error && <p className="error">{error}</p>}
        <div className="apply-form">
        <form onSubmit={handleSubmit}>
          <h2> Full Name</h2>
        <div className="input-group">
          <input
          type="text"
          name="Full Name"
          placeholder="Full Name"
          value={formData["Full Name"]}
          onChange={handleChange}
        />
        <h2> Email Address</h2>
        <input
          type="email"
          name="Email Address"
          placeholder="Email Address"
          value={formData["Email Address"]}
          onChange={handleChange}
        />
        <h2> Loan Amount</h2>
        <input
          type="number"
          name="Loan Amount"
          placeholder="Loan Amount"
          value={formData["Loan Amount"]}
          onChange={handleChange}
        />
        <h2> Loan Tenure</h2>
        <input
          type="number"
          name="Loan Tenure"
          placeholder="Loan Tenure (months)"
          value={formData["Loan Tenure"]}
          onChange={handleChange}
        />    
        <h2> Purpose of Loan</h2>
        <input
          type="text"
          name="Purpose of Loan"
          placeholder="Purpose of Loan"
          value={formData["Purpose of Loan"]}
          onChange={handleChange}
        />
      </div>
        <div className="apply-submit-btn">
        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit Application"}
        </button>
        </div>
      </form>
      </div>
    </div>
  </div>
  );
}
  
  

 