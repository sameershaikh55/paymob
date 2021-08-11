import React from "react";

// IMPORTING IMAGES
import i1 from "../assets/specification/i1.svg";
import i2 from "../assets/specification/i2.svg";
import i3 from "../assets/specification/i3.svg";
import i4 from "../assets/specification/i4.svg";
import i5 from "../assets/specification/i5.svg";
import i6 from "../assets/specification/i6.svg";
import i7 from "../assets/specification/i7.svg";
import i8 from "../assets/specification/i8.svg";
import i9 from "../assets/specification/i9.svg";
import i10 from "../assets/specification/i10.svg";
import i11 from "../assets/specification/i11.svg";
import i12 from "../assets/specification/i12.svg";
import i13 from "../assets/specification/i13.svg";
import i14 from "../assets/specification/i14.svg";
import i15 from "../assets/specification/i15.svg";
import i16 from "../assets/specification/i16.svg";
import i17 from "../assets/specification/i17.svg";
import i18 from "../assets/specification/i18.svg";

const Specifications = () => {
	const data = [
		{ i: i1, t: "Bluetooth" },
		{ i: i2, t: "Smart card" },
		{ i: i3, t: "Communications", d: "Bluetooth 3.0+BLE" },
		{ i: i4, t: "Display", d: "128x64 LCD, Backlight" },
		{ i: i5, t: "Order taking" },
		{ i: i6, t: "NFC" },
		{ i: i7, t: "Audio", d: "Speaker | Microphone" },
		{ i: i8, t: "Battery" },
		{ i: i9, t: "Weight", d: "105kg" },
		{ i: i10, t: "Dimensions", d: "116 x 66 x 14.5 mm L x W x H" },
		{
			i: i11,
			t: "Indicator lights",
			d: "1 Charging indicator 4 LED Indicators",
		},
		{
			i: i12,
			t: "Keys",
			d: "15 Keys Including 3 Functional keys",
		},
		{
			i: i13,
			t: "Processor",
			d: "ARM Secure Processor",
		},
		{
			i: i14,
			t: "Memory",
			d: "RAM: 1MB FLASH: 8MB",
		},
		{
			i: i15,
			t: "Peripheral ports",
			d: "1 Powered USB Type-C, USB Slave",
		},
		{
			i: i16,
			t: "Certificates",
			d: "PCI PTS 5.X | EMV L1 and L2 | EMV CL | Level 1 Mastercard Paypass | Visa paywave | Amex Expresspay | Mastercard TQM | BIS",
		},
		{
			i: i17,
			t: "Environmental",
		},
		{
			i: i18,
			t: "Magstripe",
		},
	];
	return (
		<div className="specification_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto">
							<h1 className="color1 fw-bold gotham">Specifications</h1>

							<div className="row">
								{data.map((prev, ind) => {
									const { i, t, d } = prev;
									return (
										<div
											key={ind}
											className="specification_card col-6 col-6 col-sm-6 col-md-4 col-lg-3 text-center"
										>
											<img src={i} alt="" />
											<h6 className="gotham f20 color1 fw500 mt-3 mb-0">{t}</h6>
											<p className="col-12 col-md-10 mx-auto text-center color2">
												{d}
											</p>
											{t === "Environmental" && (
												<p className="col-12 col-md-10 mx-auto text-center color2">
													Operating temperature: <br /> 0°C - 50°C <br />{" "}
													Storage temperature: <br /> -20°C - 70°C <br />{" "}
													Relative humidity: <br /> 5% - 95%, <br />{" "}
													Non-condensing
												</p>
											)}
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Specifications;
