import React, { useEffect, useState } from "react";
import axios from "axios";

const PaymentHistory = () => {
  const [paymentHistory, setPaymentHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  const fetchPaymentHistory = async () => {
    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");

      const response = await axios.post(
        "http://localhost:4000/api/user/get-payment-history",
        { userId },
        {
          headers: {
            token: token,
          },
        }
      );

      const data = response.data;
      if (data.success) {
        // Sort payment history by date (newest first)
        const sortedHistory = data.paymentHistory.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setPaymentHistory(sortedHistory);
      } else {
        setErr(data.message);
      }
    } catch (error) {
      console.error("Error fetching payment history:", error);
      setErr("Something went wrong while fetching payment history.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPaymentHistory();
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold mb-8 text-center text-blue-700">
        My Payment History
      </h2>

      {loading ? (
        <div className="text-center text-gray-500 text-lg">Loading...</div>
      ) : err ? (
        <div className="text-center text-red-600 text-lg">{err}</div>
      ) : paymentHistory.length === 0 ? (
        <div className="text-center text-gray-500 text-lg">
          No payment records found.
        </div>
      ) : (
        <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="min-w-full text-sm text-gray-700 bg-white border border-gray-300">
            <thead className="bg-blue-100 text-blue-800 text-md">
              <tr>
                <th className="py-3 px-4 border">Date</th>
                <th className="py-3 px-4 border">Time</th>
                <th className="py-3 px-4 border">Doctor Name</th>
                <th className="py-3 px-4 border">Slot Time</th>
                <th className="py-3 px-4 border">Amount (₹)</th>
              </tr>
            </thead>
            <tbody>
              {paymentHistory.map((item) => {
                const dateObj = new Date(item.date);
                const formattedDate = dateObj.toLocaleDateString();
                const formattedTime = dateObj.toLocaleTimeString();

                return (
                  <tr
                    key={item._id}
                    className="text-center border-t hover:bg-blue-50 transition-all"
                  >
                    <td className="py-2 px-4 border">{formattedDate}</td>
                    <td className="py-2 px-4 border">{formattedTime}</td>
                    <td className="py-2 px-4 border">
                      {item.docData?.name || "Unknown"}
                    </td>
                    <td className="py-2 px-4 border">{item.slotTime}</td>
                    <td className="py-2 px-4 border font-semibold text-green-600">
                      ₹{item.amount}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PaymentHistory;
