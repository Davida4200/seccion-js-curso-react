
const getImage = async () => {
  try {
    const apiKey = 'dGXPD2scaZnLnJCNZDdfNkkXQjfbuXL4';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const object = await resp.json();
    const {data} = object;
    const { url } =  data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append( img );
  } catch (err) {
    console.log(err);
  }
}

getImage();
