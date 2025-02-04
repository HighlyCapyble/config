// (c) 2025 Highly Capable, release under MIT License; see end of file
// Proxy AutoConfig file to route .onion and .i2p requests to localhost
//   SOCKS proxies.
//
// PRIVACY ALERT -- using this PAC file lets you surf onion and i2p sites
//   but is "leaky"; if an onion site references clearweb content/assets,
//   then those are loaded without a proxy, which can leak your location
//   and/or identity. This is NOT A REPLACEMENT FOR A FULL TOR BROWSER CONFIG

function FindProxyForURL(url, host) { 
	if (shExpMatch(host, "*.onion")) { return "SOCKS5 127.0.0.1:9050"; }  // set ToR as soon as a pattern matches
	if (shExpMatch(host, "*.i2p")) { return "SOCKS5 127.0.0.1:4447"; }    // set I2P as soon as a pattern matches

	return "DIRECT";
}
