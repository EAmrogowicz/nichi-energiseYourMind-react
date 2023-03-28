// function ZenQuotes() {
// const quotesUrl = "https://zenquotes.io/api/quotes/";
// jQuery
//   .ajax({
//     url: quotesUrl,
//     method: "GET",
//   })
//   .then(function (response) {
//     console.log(response);
//   });
// }
import { useState, useEffect } from "react";
import { Box } from "@mui/material";

export default function ZenQuote({ mood }) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means this useEffect will run once
  useEffect(() => {
    fetch(
      "https://marvel-cors.mrof.workers.dev/corsproxy/?apiurl=https://zenquotes.io/api/quotes&keyword=" +
        mood
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here instead of a catch() block so that we don't swallow exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [mood]);

  // if (error) {
  //   return <div className='quote-error'>Error: {error.message}</div>;
  // } else if (!isLoaded) {
  //   return <div className='quote-error'>Loading...</div>;
  // } else {
  //   return (
  //     <Box className='quote' sx={{ maxWidth: "600px", minHeight: "100px" }}>
  //       "{items[0].q}" <br />
  //       <span>{items[0].a}</span>
  //     </Box>
  //   );
  // }

  // separate return for loading was causing the jitter
  // NOTE: max width of 600px should be on majority of text elements as it is easier to read
  return (
    <Box
      className={`${error || !isLoaded ? "quote-error" : "quote"}`}
      sx={{ maxWidth: "600px", minHeight: "100px" }}>
      {error ? (
        <span>Error: {error.message}</span>
      ) : !isLoaded ? (
        <span>Loading...</span>
      ) : (
        <div>
          "{items[0].q}" <br />
          <span>{items[0].a}</span>
        </div>
      )}
    </Box>
  );
}
