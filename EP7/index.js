const githubapi = "https://api.github.com/users/navinsys";

const fetchData = async () => {
   const res = await fetch(githubapi); // Calls the native fetch function
   const data = await res.json(); // Parse the response as JSON
   console.log(data.bio);
};

fetchData();
