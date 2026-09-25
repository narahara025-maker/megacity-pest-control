<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Megacity Pest Control Services | Hyderabad</title>

    <meta name="description"
          content="Megacity Pest Control Services provides professional pest control services in Hyderabad.">

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, sans-serif;
        }

        body {
            background: #f7f9f8;
            color: #222;
            line-height: 1.6;
        }

        header {
            background: #0b5d3b;
            color: white;
            padding: 18px 6%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: sticky;
            top: 0;
            z-index: 1000;
        }

        .logo {
            font-size: 22px;
            font-weight: bold;
        }

        nav a {
            color: white;
            text-decoration: none;
            margin-left: 20px;
            font-weight: bold;
        }

        .hero {
            background: linear-gradient(135deg, #0b5d3b, #16805a);
            color: white;
            text-align: center;
            padding: 90px 20px;
        }

        .hero h1 {
            font-size: 44px;
            margin-bottom: 15px;
        }

        .hero p {
            font-size: 20px;
            max-width: 700px;
            margin: auto;
        }

        .buttons {
            margin-top: 30px;
        }

        .btn {
            display: inline-block;
            padding: 14px 25px;
            margin: 7px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: bold;
        }

        .call {
            background: white;
            color: #0b5d3b;
        }

        .whatsapp {
            background: #25D366;
            color: white;
        }

        section {
            padding: 60px 7%;
        }

        .section-title {
            text-align: center;
            margin-bottom: 35px;
            color: #0b5d3b;
            font-size: 32px;
        }

        .services {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 20px;
        }

        .service {
            background: white;
            padding: 30px 20px;
            border-radius: 12px;
            text-align: center;
            box-shadow: 0 3px 12px rgba(0,0,0,0.08);
        }

        .service h3 {
            color: #0b5d3b;
            margin-bottom: 10px;
        }

        .about {
            background: white;
            text-align: center;
        }

        .about p {
            max-width: 800px;
            margin: auto;
        }

        .contact {
            text-align: center;
            background: #eaf5ef;
        }

        footer {
            background: #083d29;
            color: white;
            text-align: center;
            padding: 25px;
        }

        @media (max-width: 700px) {
            header {
                flex-direction: column;
                gap: 12px;
            }

            nav a {
                margin: 5px;
                font-size: 14px;
            }

            .hero h1 {
                font-size: 32px;
            }
        }
    </style>
</head>

<body>

<header>
    <div class="logo">Megacity Pest Control Services</div>

    <nav>
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
    </nav>
</header>

<section class="hero" id="home">
    <h1>Professional Pest Control Services</h1>

    <p>
        Protect your home and business from unwanted pests with
        Megacity Pest Control Services.
    </p>

    <div class="buttons">
        <a class="btn call" href="tel:+919999999999">
            📞 Call Now
        </a>

        <a class="btn whatsapp"
           href="https://wa.me/919999999999"
           target="_blank">
            💬 WhatsApp
        </a>
    </div>
</section>

<section id="services">
    <h2 class="section-title">Our Services</h2>

    <div class="services">

        <div class="service">
            <h3>🪳 Cockroach Control</h3>
            <p>Effective treatment for cockroach infestations in homes and businesses.</p>
        </div>

        <div class="service">
            <h3>🐜 Termite Control</h3>
            <p>Protection against termites and damage to your property.</p>
        </div>

        <div class="service">
            <h3>🐀 Rodent Control</h3>
            <p>Professional solutions for rats and mice.</p>
        </div>

        <div class="service">
            <h3>🦟 Mosquito Control</h3>
            <p>Solutions to help reduce mosquitoes around your property.</p>
        </div>

        <div class="service">
            <h3>🐜 Ant Control</h3>
            <p>Targeted treatment for common ant infestations.</p>
        </div>

        <div class="service">
            <h3>🏠 General Pest Control</h3>
            <p>Complete pest-control solutions for residential and commercial properties.</p>
        </div>

    </div>
</section>

<section class="about" id="about">
    <h2 class="section-title">About Megacity Pest Control</h2>

    <p>
        Megacity Pest Control Services provides pest-control solutions
        for homes, offices, shops and other properties in Hyderabad.
        Our goal is to provide reliable and professional pest-control
        services to our customers.
    </p>
</section>

<section>
    <h2 class="section-title">Why Choose Us?</h2>

    <div class="services">

        <div class="service">
            <h3>✓ Professional Service</h3>
            <p>We focus on providing organized and reliable service.</p>
        </div>

        <div class="service">
            <h3>✓ Home & Business</h3>
            <p>Services available for residential and commercial properties.</p>
        </div>

        <div class="service">
            <h3>✓ Hyderabad</h3>
            <p>Serving customers across Hyderabad and surrounding areas.</p>
        </div>

    </div>
</section>

<section class="contact" id="contact">
    <h2 class="section-title">Contact Us</h2>

    <p>Need pest-control service?</p>

    <div class="buttons">
        <a class="btn call" href="tel:+919999999999">
            📞 Call Us
        </a>

        <a class="btn whatsapp"
           href="https://wa.me/919999999999"
           target="_blank">
            💬 Chat on WhatsApp
        </a>
    </div>
</section>

<footer>
    <p>© 2026 Megacity Pest Control Services</p>
    <p>Hyderabad, Telangana</p>
</footer>

</body>
</html>
