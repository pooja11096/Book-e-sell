import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./utils/theme";
import "./assets/css/style.css";
import Header from "./components/header/index";
import Footer from "./components/footer/index";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainNavigation from "./components/MainNavigation";
import { AuthWrapper } from "./context/auth";
import { CartWrapper } from "./context/cart";

// const express = require("express");
// var cors = require('cors')
// const app = express();
// app.use(cors());
// const { createProxyMiddleware } = require('http-proxy-middleware');
// app.use('/api', createProxyMiddleware({ 
//     target: 'http://localhost:8080/', //original url
//     changeOrigin: true, 
//     //secure: false,
//     onProxyRes: function (proxyRes, req, res) {
//        proxyRes.headers['Access-Control-Allow-Origin'] = '*';
//     }
// }));
// app.listen(5000);

// axios.get('http://10.0.0.20:9680/getDetails');

const App: React.FC = () => {
	return (
		<ThemeProvider theme={theme}>
			<React.Suspense fallback={<></>}>
				<BrowserRouter>
					<AuthWrapper>
						<CartWrapper>
							<div className="wrapper">
								<Header />
								<main>
									<MainNavigation />
								</main>
								<Footer />
							</div>
						</CartWrapper>
					</AuthWrapper>
					<ToastContainer />
				</BrowserRouter>
			</React.Suspense>
		</ThemeProvider>
	);
};

export default App;
