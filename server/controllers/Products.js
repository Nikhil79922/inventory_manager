async function handleProducts(req, res) {
    const category = req.body.category;
  
    // Sample products data for different categories
    const products = {
      Trending: [
        {
          id: "3",
          imageUrl: "https://images6.alphacoders.com/133/1338694.png",
          name: "Technical Product 3",
          price: "$30",
          description: "Detailed description of Technical Product 3",
        },
        {
          id: "4",
          imageUrl: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1704018731195-f202bbeac8a7",
          name: "Technical Product 4",
          price: "$40",
          description: "Detailed description of Technical Product 4",
        },
        {
          id: "12",
          imageUrl: "https://png.pngtree.com/thumb_back/fh260/background/20230707/pngtree-d-render-of-a-high-tech-production-line-with-modern-smartphones-image_3804900.jpg",
          name: "Technical Product 4",
          price: "$40",
          description: "Detailed description of Technical Product 4",
        },
        {
          id: "13",
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzbI9ixcPT4aCGyENnfsAeLeGPMz8wMgeMwpvkwpzMV8QOmrt7OqaYtuyor5kaPjMq2HI&usqp=CAU",
          name: "Technical Product 4",
          price: "$40",
          description: "Detailed description of Technical Product 4",
        },
        {
          id: "14",
          imageUrl: "https://png.pngtree.com/background/20230625/original/pngtree-blue-background-with-3d-illustration-of-a-strong-cellular-connection-perfect-picture-image_4046136.jpg",
          name: "Technical Product 4",
          price: "$40",
          description: "Detailed description of Technical Product 4",
        },
      ],
      Keyboard: [
        {
          id: "5",
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTwEIYd1S-fRuSdaJd-MohaUlwLR0TzeEeSQ&s",
          price: "$30",
          description: "Detailed description of Technical Product 3",
        },
        {
          id: "51",
          imageUrl: "https://i.pinimg.com/736x/ff/8d/2a/ff8d2aa612b59bfbd7d4c0c736485556.jpg",
          price: "$30",
          description: "Detailed description of Technical Product 3",
        },
        {
          id: "52",
          imageUrl: "https://c4.wallpaperflare.com/wallpaper/111/236/879/keyboards-mechanical-keyboard-hd-wallpaper-preview.jpg",
          price: "$30",
          description: "Detailed description of Technical Product 3",
        },
        {
          id: "53",
          imageUrl: "https://png.pngtree.com/thumb_back/fh260/background/20230618/pngtree-vibrant-backlit-keyboard-in-3d-render-image_3636904.jpg",
          price: "$30",
          description: "Detailed description of Technical Product 3",
        },
      ],
      Mouse: [
        {
          id: "6",
          imageUrl: "https://i0.wp.com/kndigitalstore.in/wp-content/uploads/2023/07/CLASHA.jpg?fit=1500%2C1500&ssl=1",
          name: "Technical Product 4",
          price: "$40",
          description: "Detailed description of Technical Product 4",
        },
        {
          id: "60",
          imageUrl: "https://c0.wallpaperflare.com/preview/316/361/238/black-logitech-g-series-gaming-mouse-on-red-surface.jpg",
          name: "Technical Product 4",
          price: "$40",
          description: "Detailed description of Technical Product 4",
        },
        {
          id: "70",
          imageUrl: "https://e0.pxfuel.com/wallpapers/11/309/desktop-wallpaper-buy-logitech-g903-wireless-gaming-mouse-for-just-114-99-coupon.jpg",
          name: "Technical Product 4",
          price: "$40",
          description: "Detailed description of Technical Product 4",
        },
      ],
      Speakers: [
       {
          id: "7",
          imageUrl: "https://png.pngtree.com/thumb_back/fh260/background/20230722/pngtree-cutting-edge-display-podium-for-showcasing-products-high-tech-illuminated-neon-image_3770738.jpg",
          name: "Technical Product 4",
          price: "$40",
          description: "Detailed description of Technical Product 4",
       },
       {
          id: "33",
          imageUrl: "https://images.unsplash.com/photo-1648899936678-d66551cb292c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXVkaW8lMjBzcGVha2VyfGVufDB8fDB8fHww",
          name: "Technical Product 4",
          price: "$40",
          description: "Detailed description of Technical Product 4",
       },
       {
          id: "34",
          imageUrl: "https://img.freepik.com/premium-photo/heavy-loud-speaker-hd-8k-background-wallpaper-stock-photographic-image_915071-20745.jpg",
          name: "Technical Product 4",
          price: "$40",
          description: "Detailed description of Technical Product 4",
       },
       {
          id: "34",
          imageUrl: "https://img.kwcdn.com/product/fancy/f3e31319-294b-4b4a-84bf-c4d514966a37.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp",
          name: "Technical Product 4",
          price: "$40",
          description: "Detailed description of Technical Product 4",
       },
       {
          id: "35",
          imageUrl: "https://img.freepik.com/premium-photo/stylish-black-speakers-black-background-high-resolution-acoustics-quality-characteristics-frequencies-bass-equalizer-presets-detailed-settings-volume-music-leisure-price-segment-ai_399089-6669.jpg",
          name: "Technical Product 4",
          price: "$40",
          description: "Detailed description of Technical Product 4",
       },
      ],
      Robots:[
       {
          id: "9",
          imageUrl: "https://png.pngtree.com/thumb_back/fh260/background/20230419/pngtree-robot-kid-hi-tech-blue-eyes-image_2417250.jpg",
          name: "Technical Product 8",
          price: "$80",
          description: "Detailed description of Technical Product 4",
       },
       {
          id: "91",
          imageUrl: "https://media.istockphoto.com/id/1387900612/photo/automation-data-analytic-with-robot-and-digital-visualization-for-big-data-scientist.jpg?s=612x612&w=0&k=20&c=50maOJU6CpVC55mYnUqtff2aiaJZ7KlmMn4jNhWD_eo=",
          name: "Technical Product 8",
          price: "$80",
          description: "Detailed description of Technical Product 4",
       },
       {
          id: "92",
          imageUrl: "https://cdn.pixabay.com/photo/2024/03/20/03/06/ai-generated-8644499_640.jpg",
          name: "Technical Product 8",
          price: "$80",
          description: "Detailed description of Technical Product 4",
       },
       {
          id: "93",
          imageUrl: "https://w0.peakpx.com/wallpaper/105/372/HD-wallpaper-robot-blue-code-tech.jpg",
          name: "Technical Product 8",
          price: "$80",
          description: "Detailed description of Technical Product 4",
       },
      ],
      Motherboard:[
       {
          id: "10",
          imageUrl: "https://plus.unsplash.com/premium_photo-1680700221525-c41dc28197f2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D",
          name: "Technical Product 8",
          price: "$80",
          description: "Detailed description of Technical Product 4",
       },
       {
          id: "11",
          imageUrl: "https://static6.depositphotos.com/1025323/620/i/450/depositphotos_6200159-stock-photo-digital-circuit.jpg",
          name: "Technical Product 8",
          price: "$80",
          description: "Detailed description of Technical Product 4",
       },
      ],
      Headphones:[
       {
          id: "11",
          imageUrl: "https://images.unsplash.com/photo-1628329567705-f8f7150c3cff?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaG5vbG9neSUyMHByb2R1Y3RzfGVufDB8fDB8fHww",
          name: "Technical Product 8",
          price: "$80",
          description: "Detailed description of Technical Product 4",
       },
       {
          id: "12",
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpPc1R2CBdcdUAT5EsPyvJUEO4E8dyGNg1G3sKDtw4OT7DUZ2h-SPepkoPAfXdoF8ctjo&usqp=CAU",
          name: "Technical Product 8",
          price: "$80",
          description: "Detailed description of Technical Product 4",
       },
       {
          id: "13",
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaiDMoyEzaxcuzU3md9kRQTuc-C5m9jDguuwWQk0e2xX4e_5B1XgEoELPQ68yCjTn9ank&usqp=CAU",
          name: "Technical Product 8",
          price: "$80",
          description: "Detailed description of Technical Product 4",
       },
       {
          id: "14",
          imageUrl: "https://img.freepik.com/premium-photo/black-headphone-headset-headphones-mockup-wireless-headphones_742418-54029.jpg",
          name: "Technical Product 8",
          price: "$80",
          description: "Detailed description of Technical Product 4",
       },
       {
          id: "15",
          imageUrl: "https://img.freepik.com/premium-photo/close-up-pair-headphones_999671-4546.jpg",
          name: "Technical Product 8",
          price: "$80",
          description: "Detailed description of Technical Product 4",
       },
      ]
    };
  
  
    if (products[category]) {
      res.json(products[category]);
    } else {
      res.status(404).json({ message: "Category not found" });
    }
  }
  
  module.exports = {
    handleProducts,
  };
  