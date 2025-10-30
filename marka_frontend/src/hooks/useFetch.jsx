import { useState, useEffect } from "react";

const useFetch = (apiCall, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    setData(null);

    if (typeof apiCall !== "function") {
      setError("API çağrısı geçerli bir fonksiyon değil.");
      setLoading(false);
      return;
    }

    apiCall()
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.error("useFetch hatası:", err.message);
        setError("Veri yüklenirken bir hata oluştu.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, dependencies);

  return { data, loading, error };
};

export default useFetch;
