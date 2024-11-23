const movies = [
    {
      id: 1,
      title: "Avatar: The Way of Water",
      genre: "Science Fiction",
      imdbRating: 7.8,
      reviews: "Visually stunning with a captivating underwater world.",
      price: 15,
      duration: "3h 12m",
      showtimes: ["12:00 PM", "3:30 PM", "7:00 PM"],
      image: "../assets/avatar way of water.jpeg",
    },
    {
      id: 2,
      title: "Dune",
      genre: "Adventure, Drama",
      imdbRating: 8.1,
      reviews: "Epic storytelling and breathtaking visuals.",
      price: 12,
      duration: "2h 35m",
      showtimes: ["1:00 PM", "4:00 PM", "8:00 PM"],
      image: "../assets/dune.jpeg",
    },
    {
      id: 3,
      title: "The Batman",
      genre: "Action, Crime",
      imdbRating: 7.9,
      reviews: "A darker and more grounded take on the iconic superhero.",
      price: 14,
      duration: "2h 56m",
      showtimes: ["11:00 AM", "2:30 PM", "6:00 PM"],
      image: "../assets/the batman.jpeg",
    },
    {
      id: 4,
      title: "Interstellar",
      genre: "Science Fiction, Drama",
      imdbRating: 8.6,
      reviews: "An emotional and visually dazzling exploration of space.",
      price: 15,
      duration: "2h 49m",
      showtimes: ["12:30 PM", "4:30 PM", "8:30 PM"],
      image: "../assets/intersteler.jpeg",
    },
    {
      id: 5,
      title: "Inception",
      genre: "Science Fiction, Thriller",
      imdbRating: 8.8,
      reviews:
        "A mind-bending journey through dreams with stunning action sequences.",
      price: 13,
      duration: "2h 28m",
      showtimes: ["11:15 AM", "3:15 PM", "7:15 PM"],
      image: "../assets/inception.jpeg",
    },
    {
      id: 6,
      title: "Oppenheimer",
      genre: "Biography, Drama",
      imdbRating: 8.5,
      reviews: "A gripping narrative of the man behind the atomic bomb.",
      price: 18,
      duration: "3h 0m",
      showtimes: ["1:00 PM", "5:00 PM", "9:00 PM"],
      image: "../assets/openheimer.jpeg",
    },
    {
      id: 7,
      title: "Spider-Man: No Way Home",
      genre: "Action, Adventure",
      imdbRating: 8.3,
      reviews: "A thrilling multiverse adventure with nostalgic cameos.",
      price: 14,
      duration: "2h 28m",
      showtimes: ["12:00 PM", "3:00 PM", "6:00 PM"],
      image: "../assets/spiderman no way home.jpeg",
    },
    {
      id: 8,
      title: "Black Panther: Wakanda Forever",
      genre: "Action, Adventure",
      imdbRating: 7.2,
      reviews: "A heartfelt tribute with stunning visuals and performances.",
      price: 16,
      duration: "2h 41m",
      showtimes: ["11:00 AM", "3:00 PM", "8:00 PM"],
      image: "../assets/black panther.jpeg",
    },
    {
      id: 9,
      title: "Fast X",
      genre: "Action, Crime",
      imdbRating: 6.3,
      reviews: "High-octane action with fast-paced thrills.",
      price: 14,
      duration: "2h 21m",
      showtimes: ["1:30 PM", "4:30 PM", "7:30 PM"],
      image: "../assets/fastx.jpeg",
    },
    {
      id: 10,
      title: "Doctor Strange: Multiverse of Madness",
      genre: "Action, Fantasy",
      imdbRating: 7.0,
      reviews: "A visually dazzling journey through the multiverse.",
      price: 15,
      duration: "2h 6m",
      showtimes: ["10:30 AM", "2:30 PM", "7:00 PM"],
      image: "../assets/doctor strange.jpeg",
    },
    {
      id: 11,
      title: "The Flash",
      genre: "Action, Adventure",
      imdbRating: 6.8,
      reviews: "A fun exploration of time travel and multiverse shenanigans.",
      price: 13,
      duration: "2h 24m",
      showtimes: ["12:30 PM", "4:00 PM", "9:00 PM"],
      image: "../assets/the flash.jpeg",
    },
    {
      id: 12,
      title: "Guardians of the Galaxy Vol. 3",
      genre: "Action, Comedy",
      imdbRating: 8.2,
      reviews: "A heartwarming and action-packed send-off to the beloved crew.",
      price: 16,
      duration: "2h 30m",
      showtimes: ["10:00 AM", "1:00 PM", "6:30 PM"],
      image: "../assets/gurdian of galaxy v3.jpeg",
    },
  ];
  
  const upcomingMovies = [
    {
      id: 1,
      title: "The Matrix Resurrections",
      genre: "Science Fiction",
      director: "Lana Wachowski",
      duration: "2h 28m",
      introduction:
        "A continuation of the saga established in the first Matrix film.",
      releaseDate: "2024-12-22",
      image: "../assets/matrix.jpg",
    },
    {
      id: 2,
      title: "Fantastic Beasts 4",
      genre: "Fantasy, Adventure",
      director: "David Yates",
      duration: "2h 25m",
      introduction:
        "Newt and Dumbledore face Grindelwald in a magical adventure.",
      releaseDate: "2025-04-15",
      image: "../assets/fantastic_beasts.jpg",
    },
    {
      id: 3,
      title: "Mission: Impossible - Dead Reckoning Part Two",
      genre: "Action, Thriller",
      director: "Christopher McQuarrie",
      duration: "2h 43m",
      introduction: "Ethan Hunt returns for his most dangerous mission yet.",
      releaseDate: "2025-06-28",
      image: "../assets/mission_impossible.jpg",
    },
    {
      id: 4,
      title: "Dune: Part Two",
      genre: "Science Fiction, Adventure",
      director: "Denis Villeneuve",
      duration: "2h 35m",
      introduction:
        "Paul Atreides unites with Chani to seek vengeance on Arrakis.",
      releaseDate: "2024-11-03",
      image: "../assets/dune2.jpg",
    },
  ];
  
  const movieList = document.getElementById("movie-list");
  const ticketList = document.getElementById("ticket-list");
  const modal = document.getElementById("popup-modal");
  const closePopup = document.getElementById("close-popup");
  const selectedMovieTitle = document.getElementById("selected-movie-title");
  const showtimeSelect = document.getElementById("showtime-select");
  const seatContainer = document.getElementById("seat-container");
  const pricePerSeat = document.getElementById("price-per-seat");
  const totalPrice = document.getElementById("total-price");
  const confirmBooking = document.getElementById("confirm-booking");
  const ticketDetails = document.getElementById("ticket-details");
  const confirmation = document.getElementById("confirmation");
  const newBooking = document.getElementById("new-booking");
  const contactForm = document.getElementById("contact-form");
  const customerFeedback = document.getElementById("customer-feedback");
  const confirmedTicketsSection = document.getElementById("confirmed-tickets");
  const upcomingMovieList = document.getElementById("upcoming-movie-list");
  
  let selectedSeats = [];
  let currentMovie = null;
  
  // Helper Functions
  const createElementFromHTML = (htmlString) => {
    const div = document.createElement("div");
    div.innerHTML = htmlString.trim();
    return div.firstChild;
  };
  
  // Display Movies
  const displayMovies = (movies) => {
    movies.forEach((movie) => {
      const movieCard = createElementFromHTML(`
        <div class="movie-card">
            <img src="${movie.image}" alt="${movie.title}" class="movie-image">
            <div class="movie-info">
                <p class="genre">${movie.genre}</p>
                <h3 class="title">${movie.title}</h3>
                <p class="rating">IMDb Rating: <strong>${movie.imdbRating}</strong></p>
                <p class="duration">Duration: <strong>${movie.duration}</strong></p>
                <p class="review">${movie.reviews}</p>
                <p class="price">Price: <strong>$${movie.price}</strong></p>
                <button class="book-btn">Book Now</button>
            </div>
        </div>
      `);
      movieCard
        .querySelector(".book-btn")
        .addEventListener("click", () => openModal(movie));
      movieList.appendChild(movieCard);
    });
  };
  
  // Display Upcoming Movies
  const displayUpcomingMovies = (movies) => {
    movies.forEach((movie) => {
      const movieCard = createElementFromHTML(`
        <div class="upcoming-movie-card">
            <img src="${movie.image}" alt="${movie.title}" class="movie-image">
            <div class="movie-info">
                <h3 class="title">${movie.title}</h3>
                <p class="director"><strong>Director:</strong> ${movie.director}</p>
                <p class="genre"><strong>Genre:</strong> ${movie.genre}</p>
                <p class="duration"><strong>Duration:</strong> ${movie.duration}</p>
                <p class="release-date"><strong>Release Date:</strong> ${movie.releaseDate}</p>
                <p class="introduction">${movie.introduction}</p>
            </div>
        </div>
      `);
      upcomingMovieList.appendChild(movieCard);
    });
  };
  
  // Open Booking Modal
  const openModal = (movie) => {
    currentMovie = movie;
    selectedMovieTitle.textContent = movie.title;
    showtimeSelect.innerHTML = movie.showtimes
      .map((time) => `<option value="${time}">${time}</option>`)
      .join("");
  
    generateSeats();
    modal.style.display = "block";
  };
  
  // Generate Seat Selection
  const generateSeats = () => {
    seatContainer.innerHTML = "";
    selectedSeats = [];
  
    for (let i = 1; i <= 30; i++) {
      const seat = createElementFromHTML(`
        <div class="seat">${i}</div>
      `);
      seat.addEventListener("click", () => toggleSeat(seat));
      seatContainer.appendChild(seat);
    }
  };
  
  // Toggle Seat Selection
  const toggleSeat = (seat) => {
    if (seat.classList.contains("selected")) {
      seat.classList.remove("selected");
      selectedSeats = selectedSeats.filter((s) => s !== seat.textContent);
    } else {
      seat.classList.add("selected");
      selectedSeats.push(seat.textContent);
    }
    updatePrice();
  };
  
  // Update Price
  const updatePrice = () => {
    const total = selectedSeats.length * currentMovie.price;
    pricePerSeat.textContent = `$${currentMovie.price}`;
    totalPrice.textContent = `$${total}`;
  };
  
  // Confirm Booking
  confirmBooking.addEventListener("click", () => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat!");
      return;
    }
  
    const bookingData = {
      movie: currentMovie.title,
      showtime: showtimeSelect.value,
      seats: selectedSeats,
      totalPrice: selectedSeats.length * currentMovie.price,
    };
  
    console.log("Booking Data:", bookingData);
  
    saveBookingToLocalStorage(bookingData);
    displayConfirmedTickets();
  
    modal.style.display = "none";
    confirmation.style.display = "block";
  
    ticketDetails.innerHTML = `
      <p>Movie: ${bookingData.movie}</p>
      <p>Showtime: ${bookingData.showtime}</p>
      <p>Seats: ${bookingData.seats.join(", ")}</p>
      <p>Total Price: $${bookingData.totalPrice}</p>
    `;

    displayConfirmedTickets();
  });  
  
  // Save Booking to Local Storage
  const saveBookingToLocalStorage = (data) => {
    const bookings = loadBookingsFromLocalStorage();
    bookings.push(data);
    localStorage.setItem("bookings", JSON.stringify(bookings));
  };
  
  // Load Bookings from Local Storage
  const loadBookingsFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem("bookings")) || [];
  };
  
  // Display Confirmed Tickets
  const displayConfirmedTickets = () => {
    const bookings = loadBookingsFromLocalStorage();
    ticketList.innerHTML = "";
  
    if (bookings.length === 0) {
      confirmedTicketsSection.style.display = "none";
    } else {
      confirmedTicketsSection.style.display = "block";
      bookings.forEach((booking) => {
        const ticket = createElementFromHTML(`
          <div class="ticket">
              <p><strong>Movie:</strong> ${booking.movie}</p>
              <p><strong>Showtime:</strong> ${booking.showtime}</p>
              <p><strong>Seats:</strong> ${booking.seats.join(", ")}</p>
              <p><strong>Total Price:</strong> $${booking.totalPrice}</p>
          </div>
        `);
        ticketList.appendChild(ticket);
      });
    }
  };
  
  // Event Listeners
  document.addEventListener("DOMContentLoaded", () => {
      const contactForm = document.getElementById("contact-form");
      const newBooking = document.getElementById("new-booking");
      const closePopup = document.getElementById("close-popup");
    
      if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
          e.preventDefault();
          contactForm.style.display = "none";
          document.getElementById("customer-feedback").classList.remove("hidden");
        });
      }
    
      if (newBooking) {
        newBooking.addEventListener("click", () => {
          document.getElementById("confirmation").style.display = "none";
        });
      }
    
      if (closePopup) {
        closePopup.addEventListener("click", () => {
          document.getElementById("popup-modal").style.display = "none";
        });
      }
    });  
  
  // Initialize on Page Load
  displayMovies(movies);
  displayUpcomingMovies(upcomingMovies);
  displayConfirmedTickets();  