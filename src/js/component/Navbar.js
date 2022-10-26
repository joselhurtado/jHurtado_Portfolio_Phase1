import React from "react";
import NavLogo from "/src/img/JoseHurtado_Logo_Color.svg"

export function Navbar() {
  return (
<nav class="navbar navbar-expand-lg justify-content-between">
  <a class="navbar-brand" href="/">
    <svg xmlns="http://www.w3.org/2000/svg" width="189.648" height="41" viewBox="0 0 189.648 41">
      <path id="Union_3" data-name="Union 3" d="M12.215,38.428A20.07,20.07,0,1,1,20,40,19.935,19.935,0,0,1,12.215,38.428ZM27.679,9.078,19.967,32.747a1.1,1.1,0,0,0,1.046,1.441,1.073,1.073,0,0,0,.34-.055l6.2-1.982-1.378-1.9-3.442,1.123L29.771,9.76a1.1,1.1,0,1,0-2.093-.682Zm-20.2,7c0,.009,0,.018,0,.027a.221.221,0,0,0,0,.025l-.007,7.907a1.109,1.109,0,0,0,.21.645l4.749,6.548a1.107,1.107,0,0,0,.889.455,1.261,1.261,0,0,0,.173-.014,1.1,1.1,0,0,0,.876-.746L22.081,7.254a1.1,1.1,0,0,0-1.047-1.442,1.088,1.088,0,0,0-.339.054L13,8.358a1.1,1.1,0,0,0-.552,1.695l3.883,5.37.847-2.6L15.12,9.986l4.2-1.362L12.945,28.186l-3.27-4.509.006-7.546v-.014a.1.1,0,0,0,0-.027v-.144H9.67a1.1,1.1,0,0,0-2.179,0H7.48ZM28.65,31.618a1.1,1.1,0,0,0,1.1-1.1,1.092,1.092,0,0,0-.158-.566h0l.005,0-3.886-5.359-.843,2.587,2.857,3.939a.844.844,0,0,0,.075.1l.016.022h0A1.106,1.106,0,0,0,28.65,31.618ZM19,19.081,22.206,23.5l.843-2.586L19.867,16.53ZM73.412,29a7.157,7.157,0,0,1-1.74-.732,5.4,5.4,0,0,1-1.368-1.14l1.872-1.9a3.9,3.9,0,0,0,1.391,1.008,4.459,4.459,0,0,0,1.752.336,2.487,2.487,0,0,0,1.164-.216.7.7,0,0,0,.4-.648.832.832,0,0,0-.419-.744,4.034,4.034,0,0,0-1.093-.444q-.672-.18-1.4-.408a7.544,7.544,0,0,1-1.4-.6,3,3,0,0,1-1.092-1.032,3.151,3.151,0,0,1-.42-1.715,3.4,3.4,0,0,1,.54-1.921,3.564,3.564,0,0,1,1.548-1.272,5.722,5.722,0,0,1,2.376-.456,6.5,6.5,0,0,1,2.6.5,4.786,4.786,0,0,1,1.931,1.512l-1.9,1.9a3.188,3.188,0,0,0-1.188-.936,3.538,3.538,0,0,0-1.428-.288,2.154,2.154,0,0,0-1.068.216.666.666,0,0,0-.372.6.74.74,0,0,0,.42.671,4.622,4.622,0,0,0,1.092.42q.672.18,1.4.408a6.094,6.094,0,0,1,1.392.636,3.329,3.329,0,0,1,1.08,1.08,3.216,3.216,0,0,1,.419,1.728,3.3,3.3,0,0,1-1.224,2.7,5.132,5.132,0,0,1-3.335,1A7.154,7.154,0,0,1,73.412,29ZM179.3,28.436a6.1,6.1,0,0,1-2.232-2.184,5.882,5.882,0,0,1-.828-3.084,5.816,5.816,0,0,1,.816-3.06,6.03,6.03,0,0,1,2.232-2.16,6.622,6.622,0,0,1,6.324,0,6.056,6.056,0,0,1,2.219,2.16,5.816,5.816,0,0,1,.816,3.06,5.967,5.967,0,0,1-3.036,5.269,6.6,6.6,0,0,1-6.313,0Zm1.6-7.944a2.832,2.832,0,0,0-1.057,1.092,3.28,3.28,0,0,0-.383,1.608,3.35,3.35,0,0,0,.383,1.62,2.818,2.818,0,0,0,1.057,1.1,2.967,2.967,0,0,0,1.535.4,3.085,3.085,0,0,0,1.572-.4,2.7,2.7,0,0,0,1.056-1.1,3.429,3.429,0,0,0,.373-1.62,3.28,3.28,0,0,0-.384-1.608,2.837,2.837,0,0,0-1.056-1.092,3.02,3.02,0,0,0-1.561-.4A2.967,2.967,0,0,0,180.9,20.492Zm-15.984,7.956a5.607,5.607,0,0,1-2-2.16,6.864,6.864,0,0,1,0-6.168,5.632,5.632,0,0,1,1.992-2.16,5.32,5.32,0,0,1,2.893-.792,4.892,4.892,0,0,1,2.244.5,4.289,4.289,0,0,1,1.044.735V11.648h3.144V29H171.1V27.946a4.374,4.374,0,0,1-1.057.766,4.786,4.786,0,0,1-2.255.528A5.331,5.331,0,0,1,164.912,28.448ZM166.8,20.48a2.86,2.86,0,0,0-1.032,1.1,3.367,3.367,0,0,0-.372,1.608,3.494,3.494,0,0,0,.372,1.644,2.724,2.724,0,0,0,1.044,1.1,3.153,3.153,0,0,0,3.06,0,2.751,2.751,0,0,0,1.032-1.1,3.494,3.494,0,0,0,.372-1.644,3.435,3.435,0,0,0-.372-1.62,2.753,2.753,0,0,0-1.032-1.1,3.133,3.133,0,0,0-3.072.013Zm-16.02,7.968a5.523,5.523,0,0,1-1.992-2.16,6.964,6.964,0,0,1,0-6.168,5.511,5.511,0,0,1,1.992-2.16,5.289,5.289,0,0,1,2.856-.792,4.817,4.817,0,0,1,2.232.5,4.105,4.105,0,0,1,1.129.84v-1.1h3.119V29h-3.119V27.878a4.288,4.288,0,0,1-1.129.846,4.734,4.734,0,0,1-2.232.516A5.289,5.289,0,0,1,150.776,28.448Zm1.908-7.98a2.754,2.754,0,0,0-1.032,1.1,3.434,3.434,0,0,0-.372,1.62,3.494,3.494,0,0,0,.372,1.644,2.751,2.751,0,0,0,1.032,1.1,2.9,2.9,0,0,0,1.524.4,2.785,2.785,0,0,0,2.137-.876,3.2,3.2,0,0,0,.815-2.268,3.435,3.435,0,0,0-.372-1.62,2.753,2.753,0,0,0-1.032-1.1,2.954,2.954,0,0,0-1.548-.4A2.906,2.906,0,0,0,152.684,20.468ZM119.2,28.592a4.74,4.74,0,0,1-1.86-1.8,5.187,5.187,0,0,1-.671-2.664v-6.72h3.168v6.648a2.907,2.907,0,0,0,.239,1.236,1.673,1.673,0,0,0,.72.78,2.314,2.314,0,0,0,1.129.264,1.984,1.984,0,0,0,1.535-.6,2.391,2.391,0,0,0,.553-1.68V17.408h3.144v6.72a5.323,5.323,0,0,1-.66,2.688,4.574,4.574,0,0,1-1.849,1.787,5.683,5.683,0,0,1-2.723.636A5.6,5.6,0,0,1,119.2,28.592ZM84.32,28.46a6.135,6.135,0,0,1-2.268-8.352,5.991,5.991,0,0,1,2.2-2.16,6.083,6.083,0,0,1,3.1-.8,5.732,5.732,0,0,1,2.964.756,5.427,5.427,0,0,1,2.016,2.064,5.969,5.969,0,0,1,.733,2.965,5.9,5.9,0,0,1-.036.635,6.373,6.373,0,0,1-.132.733l-8.472.02a3.4,3.4,0,0,0,.252.664,2.8,2.8,0,0,0,1.139,1.2,3.456,3.456,0,0,0,1.728.42,4.147,4.147,0,0,0,1.608-.3,3.375,3.375,0,0,0,1.248-.9l1.848,1.849a5.37,5.37,0,0,1-2.052,1.488,6.782,6.782,0,0,1-2.628.5A6.6,6.6,0,0,1,84.32,28.46Zm1.392-8.28a2.762,2.762,0,0,0-1.068,1.176,3.334,3.334,0,0,0-.227.608l5.611-.016a3.634,3.634,0,0,0-.248-.747,2.4,2.4,0,0,0-.936-1.068,2.836,2.836,0,0,0-1.5-.372A3.1,3.1,0,0,0,85.712,20.18ZM60,28.436a6.1,6.1,0,0,1-2.232-2.184,5.882,5.882,0,0,1-.828-3.084,5.816,5.816,0,0,1,.816-3.06,6.03,6.03,0,0,1,2.232-2.16,6.622,6.622,0,0,1,6.324,0,6.056,6.056,0,0,1,2.219,2.16,5.816,5.816,0,0,1,.816,3.06,5.967,5.967,0,0,1-3.036,5.269,6.6,6.6,0,0,1-6.313,0Zm1.6-7.944a2.832,2.832,0,0,0-1.057,1.092,3.28,3.28,0,0,0-.383,1.608,3.35,3.35,0,0,0,.383,1.62,2.818,2.818,0,0,0,1.057,1.1,2.967,2.967,0,0,0,1.535.4,3.085,3.085,0,0,0,1.572-.4,2.7,2.7,0,0,0,1.056-1.1,3.429,3.429,0,0,0,.373-1.62,3.28,3.28,0,0,0-.384-1.608,2.837,2.837,0,0,0-1.056-1.092,3.02,3.02,0,0,0-1.561-.4A2.967,2.967,0,0,0,61.592,20.492Zm-15.2,8.16a5.518,5.518,0,0,1-1.931-1.6l2.208-2.111a2.943,2.943,0,0,0,1.044.948,2.851,2.851,0,0,0,1.356.324,2.659,2.659,0,0,0,1.308-.312,2.072,2.072,0,0,0,.864-.912,3.254,3.254,0,0,0,.3-1.464v-11.4h3.289V23.336a6.53,6.53,0,0,1-.708,3.108,5.061,5.061,0,0,1-1.992,2.065,6.034,6.034,0,0,1-3.037.732A5.917,5.917,0,0,1,46.388,28.652ZM141.44,29V20.168h-2.713v-2.76h2.713V12.584h3.144v4.824H147.3v2.76h-2.712V29Zm-11.785,0V17.408H132.8v1.025l.023-.028a3.658,3.658,0,0,1,2.976-1.236,3.957,3.957,0,0,1,1.512.275,3.331,3.331,0,0,1,1.224.9L136.568,20.6a1.671,1.671,0,0,0-.635-.432,2.347,2.347,0,0,0-.852-.144,2.222,2.222,0,0,0-1.644.636,2.626,2.626,0,0,0-.635,1.931V29ZM110.6,29V21.728h-7.32V29h-3.264V12.128h3.264v6.719h7.32V12.128h3.264V29Z" transform="translate(0.5 0.5)" fill="#001648" stroke="rgba(0,0,0,0)" stroke-miterlimit="10" stroke-width="1"/>
    </svg>
  </a>
  <form className="form-inline">
  <div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<a className="nav-link" href="#">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								About
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Services
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Contact
							</a>
						</li>
					</ul>
				</div>
  </form>
</nav>
  );
}