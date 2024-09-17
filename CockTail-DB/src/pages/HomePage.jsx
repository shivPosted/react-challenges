import { Outlet, useParams } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./HomePage.module.css";
import { useState, useEffect, useRef } from "react";

export default function HomePage({ setData, children, setLoading }) {
  const { id } = useParams();
  console.log(id);
  const [query, setQuery] = useState("");

  const input = useRef(null);

  useEffect(() => {
    input.current.focus();
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setLoading(true);
    try {
      const res = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`,
      );
      if (!res.ok) throw new Error(`Error: ${res.statusText}, ${res.status}`);

      const { drinks: data } = await res.json();
      setData(data);
      console.log(data);
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    fetchData();
  }
  return (
    <>
      <PageNav />
      {id ? (
        <Outlet />
      ) : (
        <main className={styles.main}>
          <form action="none" onSubmit={handleSubmit} className={styles.form}>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              ref={input}
            />
            <button>Search</button>
          </form>
          {children}
        </main>
      )}
    </>
  );
}
