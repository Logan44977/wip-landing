import Landing from "../components/landing";
import Head from 'next/head';

const Header = () => {
    return(
      <Head>
        <title>Work In Puckgress</title>
        <link rel='shortcut icon' type='image/x-icon' href='/static/favicon.ico' />
        <meta name="description" content="Work In Puckgress is the future home of an easy to use and understand NHL stats website"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        {/* twitter card data */}
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:site" content="@logan44977"/>
        <meta name="twitter:title" content="Work In Puckgress"/>
        <meta name="twitter:description" content="Work In Puckgress is the future home of an easy to use and understand NHL stats website."/>
        <meta name="twitter:creator" content="@logan44977"/>
        <meta name="twitter:image" content="https://workinpuckgress.com/static/logo.png"/>

        {/* Open Graph Tags */}
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Work In Puckgress"/>
        <meta property="og:description" content="Work In Puckgress is the future home of an easy to use and understand NHL stats website. "/>
        <meta property="og:url" content="https://workinpuckgress.com"/>
        <meta property="og:image" content="https://workinpuckgress.com/static/logo.png"/>
      </Head>

    )
}

const Index = () => <div>
    <Header/>
    <Landing/>

    <style jsx global>{`
        @import url("https://fonts.googleapis.com/css?family=Roboto:300,400,700");
        html, body {
          margin: 0;
          font-family: 'Roboto', sans-serif; }
        
        .home-header {
          height: 60px; }
        
        .home-footer {
          height: 230px;
          background: #464A4F;
          display: flex;
          flex-wrap: wrap; }
          @media (min-width: 1300px) {
            .home-footer {
              height: 280px; } }
          .home-footer-left {
            width: 60%;
            box-sizing: border-box;
            padding-left: 5vw; }
            @media (min-width: 900px) and (max-width: 1299px) {
              .home-footer-left {
                width: 60%;
                box-sizing: border-box;
                padding-left: 20px; } }
            @media (min-width: 600px) and (max-width: 899px) {
              .home-footer-left {
                width: 60%;
                box-sizing: border-box;
                padding-left: 20px; } }
            @media (max-width: 599px) {
              .home-footer-left {
                width: 100%;
                box-sizing: border-box;
                padding-left: 20px; } }
            .home-footer-left-name {
              color: #fff;
              font-size: 35px; }
              @media (min-width: 900px) and (max-width: 1299px) {
                .home-footer-left-name {
                  font-size: 30px; } }
              @media (min-width: 600px) and (max-width: 899px) {
                .home-footer-left-name {
                  font-size: 30px; } }
              @media (max-width: 599px) {
                .home-footer-left-name {
                  font-size: 20px;
                  margin-top: 25px; } }
            .home-footer-left-img {
              width: 150px; }
              @media (min-width: 900px) and (max-width: 1299px) {
                .home-footer-left-img {
                  width: 120px; } }
              @media (min-width: 600px) and (max-width: 899px) {
                .home-footer-left-img {
                  width: 120px; } }
              @media (max-width: 599px) {
                .home-footer-left-img {
                  width: 70px; } }
          .home-footer-right {
            width: 40%;
            display: flex;
            justify-content: center;
            align-items: center; }
            @media (min-width: 900px) and (max-width: 1299px) {
              .home-footer-right {
                width: 40%;
                display: flex;
                justify-content: center;
                align-items: center; } }
            @media (min-width: 600px) and (max-width: 899px) {
              .home-footer-right {
                width: 40%;
                display: flex;
                justify-content: center;
                align-items: center; } }
            @media (max-width: 599px) {
              .home-footer-right {
                width: 100%;
                display: block;
                margin-left: 20px;
                margin-top: 10px; } }
        
        .home-content {
          background: linear-gradient(242deg, #61BFD9 16%, #0551B4 67%);
          height: 630px;
          transition: 1s ease-in; }
          .home-content-holder {
            height: 560px;
            width: 1300px;
            position: relative;
            margin: auto; }
            @media (min-width: 900px) and (max-width: 1299px) {
              .home-content-holder {
                width: 100vw; } }
            @media (min-width: 600px) and (max-width: 899px) {
              .home-content-holder {
                width: 100vw; } }
            @media (max-width: 599px) {
              .home-content-holder {
                width: 100vw; } }
          .home-content-left {
            position: absolute;
            width: 490px;
            height: 640px;
            top: 100px;
            left: 0;
            background: #333;
            box-shadow: 3px 3px 31px 0px rgba(0, 0, 0, 0.18);
            z-index: 10; }
            @media (min-width: 900px) and (max-width: 1299px) {
              .home-content-left {
                top: 0px;
                height: 630px;
                opacity: 0.5;
                box-shadow: none; } }
            @media (min-width: 600px) and (max-width: 899px) {
              .home-content-left {
                top: 0;
                height: 630px;
                width: 100vw;
                opacity: 0.3;
                box-shadow: none; } }
            @media (max-width: 599px) {
              .home-content-left {
                top: 0;
                opacity: 0.2;
                width: 100vw;
                left: 0;
                height: 630px;
                overflow: hidden; } }
            .home-content-left-div {
              height: inherit;
              width: inherit;
              position: absolute;
              top: 0;
              transition: 1s ease;
              overflow: hidden;
              display: flex;
              justify-content: center; }
              .home-content-left-div.show {
                opacity: 1; }
              .home-content-left-div.hide {
                opacity: 0; }
            .home-content-left-img1 {
              position: absolute;
              bottom: -2px;
              width: 700px;
              margin: auto; }
            .home-content-left-img2 {
              position: absolute;
              top: 0;
              width: 550px; }
            .home-content-left-img3 {
              position: absolute;
              bottom: -100px;
              width: 800px;
              left: -200px; }
          .home-content-right {
            left: 380px;
            position: absolute;
            height: 500px;
            top: 100px;
            z-index: 100; }
            @media (min-width: 900px) and (max-width: 1299px) {
              .home-content-right {
                left: 0; } }
            @media (min-width: 600px) and (max-width: 899px) {
              .home-content-right {
                left: 0;
                top: 50px; } }
            @media (max-width: 599px) {
              .home-content-right {
                left: 0;
                top: 80px; } }
        
        .home-text-h1 {
          color: #fff;
          font-size: 105px;
          margin-top: 70px;
          margin-bottom: 40px; }
          @media (min-width: 900px) and (max-width: 1299px) {
            .home-text-h1 {
              font-size: 100px;
              text-align: center; } }
          @media (min-width: 600px) and (max-width: 899px) {
            .home-text-h1 {
              font-size: 100px;
              text-align: center;
              margin-top: 0;
              padding: 0 10vw; } }
          @media (max-width: 599px) {
            .home-text-h1 {
              font-size: 60px;
              text-align: center;
              margin-top: 0;
              padding: 0 5vw; } }
        
        .home-text-p {
          color: #fff;
          font-size: 30px;
          margin-top: 60px;
          margin-left: 150px;
          padding-right: 10px;
          opacity: 0.8; }
          @media (min-width: 900px) and (max-width: 1299px) {
            .home-text-p {
              margin-left: 0;
              text-align: center;
              padding: 0 10vw;
              opacity: 1; } }
          @media (min-width: 600px) and (max-width: 899px) {
            .home-text-p {
              margin-left: 0;
              text-align: center;
              padding: 0 5vw;
              opacity: 1; } }
          @media (max-width: 599px) {
            .home-text-p {
              margin-left: 0;
              text-align: center;
              font-size: 18px;
              opacity: 1;
              line-height: 1.5em;
              padding: 0 5vw; } }
        
        .home-text-h2 {
          color: #464A4F;
          font-size: 50px;
          text-align: center; }
          @media (min-width: 900px) and (max-width: 1299px) {
            .home-text-h2 {
              margin-top: 0; } }
          @media (max-width: 599px) {
            .home-text-h2 {
              margin-top: 0;
              font-size: 30px; } }
        
        .home-text-success {
          color: #fff;
          font-size: 26px;
          margin: 0 0 0 50px;
          font-weight: 400; }
          @media (max-width: 599px) {
            .home-text-success {
              font-size: 18px;
              margin-left: 20px; } }
        
        .home-text-error {
          color: red;
          margin-left: 180px;
          font-size: 20px; }
          .home-text-error-mobile {
            display: none;
            text-align: center;
            font-size: 20px; }
            @media (max-width: 599px) {
              .home-text-error-mobile {
                display: block;
                color: #fff; } }
          @media (min-width: 900px) and (max-width: 1299px) {
            .home-text-error {
              margin-left: 0;
              text-align: center; } }
          @media (min-width: 600px) and (max-width: 899px) {
            .home-text-error {
              margin-left: 0;
              text-align: center; } }
          @media (max-width: 599px) {
            .home-text-error {
              display: none; } }
        
        .home-holder-input {
          height: 150px;
          padding-top: 30px; }
          @media (min-width: 900px) and (max-width: 1299px) {
            .home-holder-input {
              text-align: center;
              padding-top: 65px; } }
          @media (min-width: 600px) and (max-width: 899px) {
            .home-holder-input {
              text-align: center;
              display: flex;
              justify-content: center;
              align-items: center; } }
          @media (max-width: 599px) {
            .home-holder-input {
              display: flex;
              justify-content: center;
              align-items: center;
              flex-wrap: wrap;
              margin-top: 40px; } }
        
        .home-holder-text {
          height: 350px; }
          @media (min-width: 600px) and (max-width: 899px) {
            .home-holder-text {
              height: auto; } }
          @media (max-width: 599px) {
            .home-holder-text {
              height: 350px; } }
        
        .home-holder-links {
          width: 100%;
          display: flex;
          flex-wrap: wrap; }
          @media (min-width: 600px) and (max-width: 899px) {
            .home-holder-links {
              justify-content: center; } }
          @media (max-width: 599px) {
            .home-holder-links {
              justify-content: center; } }
        
        .home-input {
          height: 40px;
          width: 500px;
          border: none;
          font-size: 30px;
          padding: 20px;
          color: #464A4F;
          box-shadow: 4px 4px 50px 0px rgba(0, 0, 0, 0.4);
          margin-left: 70px; }
          @media (min-width: 900px) and (max-width: 1299px) {
            .home-input {
              margin-left: 0; } }
          @media (min-width: 600px) and (max-width: 899px) {
            .home-input {
              width: 50vw;
              margin-left: 0; } }
          @media (max-width: 599px) {
            .home-input {
              height: 50px;
              padding: 10px;
              font-size: 20px;
              display: block;
              margin: 0 6vw 0;
              width: 88vw;
              box-sizing: border-box; } }
        
        .home-button {
          height: 80px;
          width: 200px;
          border: none;
          font-size: 30px;
          padding: 20px;
          background: #464A4F;
          color: #fff;
          box-shadow: 4px 4px 50px 0px rgba(0, 0, 0, 0.4);
          cursor: pointer; }
          @media (min-width: 600px) and (max-width: 899px) {
            .home-button {
              width: 170px; } }
          @media (max-width: 599px) {
            .home-button {
              height: 60px;
              font-size: 20px;
              padding: 10px 0;
              display: block;
              text-align: center;
              margin: 40px 15vw 0;
              width: calc(100vw - 30vw);
              box-sizing: border-box; } }
        
        .home-updates {
          padding-top: 150px; }
          @media (min-width: 900px) and (max-width: 1299px) {
            .home-updates {
              padding-top: 130px; } }
          @media (max-width: 599px) {
            .home-updates {
              padding-top: 70px; } }
          .home-updates-holder {
            width: 1300px;
            margin: auto;
            padding-top: 40px;
            margin-bottom: 50px; }
            @media (min-width: 900px) and (max-width: 1299px) {
              .home-updates-holder {
                width: 900px;
                overflow: hidden;
                padding-top: 0; } }
            @media (min-width: 600px) and (max-width: 899px) {
              .home-updates-holder {
                width: 600px;
                overflow: hidden;
                padding-top: 0; } }
            @media (max-width: 599px) {
              .home-updates-holder {
                width: 100vw; } }
        
        .home-link {
          width: 33.3%;
          padding: 0 30px;
          box-sizing: border-box; }
          @media (min-width: 600px) and (max-width: 899px) {
            .home-link {
              width: 50%; } }
          @media (max-width: 599px) {
            .home-link {
              width: 80%;
              margin-top: 40px; } }
          @media (min-width: 600px) and (max-width: 899px) {
            .home-link.third {
              margin-top: 50px; } }
        
        .home-success {
          display: flex;
          align-items: center;
          margin-left: 150px; }
          @media (min-width: 900px) and (max-width: 1299px) {
            .home-success {
              background: #353535;
              margin-left: 0;
              text-align: center;
              justify-content: center;
              width: 90vw;
              margin: auto;
              height: 120px; } }
          @media (min-width: 600px) and (max-width: 899px) {
            .home-success {
              margin-left: 0;
              background: #353535;
              text-align: center;
              justify-content: center;
              width: 85vw;
              margin: auto;
              padding: 2vw 2vw; } }
          @media (max-width: 599px) {
            .home-success {
              margin-left: 0;
              width: 80vw;
              margin: 0 auto;
              height: 100px; } }
        
        .home-img-success {
          width: 100px;
          height: 100px; }
          @media (max-width: 599px) {
            .home-img-success {
              width: 50px;
              height: 50px; } }
        
        .background0 {
          background: linear-gradient(to top, #e53935, #e35d5b); }
        
        .background1 {
          background: linear-gradient(to right, #4776e6, #8e54e9); }
        
        .background2 {
          background: linear-gradient(to left, #f7971e, #ffd200); }
        
    `}</style>

</div>

export default Index;