function extractData(log) {
	const logRegex = /(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}), IP: (\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}), Error: (.*)\n?/g;
	let match;
	const ret = [];
	while (match = logRegex.exec(log)) {
		ret.push({
			log: match[0],
			date: match[1],
			ip: match[2],
			error: match[3],
		});
	}
	return ret;
}

/*
2024-11-05 12:23:45, IP: 192.168.1.10, Error: Database connection failed
2024-11-05 12:24:13, IP: 203.0.113.8, Error: Unauthorized access attempt
2024-11-05 12:25:01, IP: 192.168.1.11, Error: User session timeout
2024-11-05 12:26:43, IP: 203.0.113.15, Error: File not found - /home/user/data.csv
2024-11-05 12:27:29, IP: 192.168.1.12, Error: Invalid password attempt
2024-11-05 12:28:05, IP: 203.0.113.22, Error: Network timeout
2024-11-05 12:29:18, IP: 192.168.1.15, Error: Permission denied - /var/www/html
2024-11-05 12:30:02, IP: 203.0.113.33, Error: Database connection failed
2024-11-05 12:30:48, IP: 192.168.1.20, Error: User not found - Username: 'admin'
2024-11-05 12:31:25, IP: 203.0.113.45, Error: Insufficient disk space - /dev/sda1
2024-11-05 12:32:07, IP: 192.168.1.25, Error: Configuration file missing - /etc/config.cfg
2024-11-05 12:32:56, IP: 203.0.113.50, Error: Unauthorized access attempt
2024-11-05 12:33:35, IP: 192.168.1.30, Error: SSL handshake failed
2024-11-05 12:34:22, IP: 203.0.113.55, Error: Connection refused - IP: 192.168.1.100
2024-11-05 12:35:12, IP: 192.168.1.35, Error: Invalid input format - Expected JSON
*/
const data = extractData('2024-11-05 12:23:45, IP: 192.168.1.10, Error: Database connection failed\n2024-11-05 12:24:13, IP: 203.0.113.8, Error: Unauthorized access attempt\n2024-11-05 12:25:01, IP: 192.168.1.11, Error: User session timeout\n2024-11-05 12:26:43, IP: 203.0.113.15, Error: File not found - /home/user/data.csv\n2024-11-05 12:27:29, IP: 192.168.1.12, Error: Invalid password attempt\n2024-11-05 12:28:05, IP: 203.0.113.22, Error: Network timeout\n2024-11-05 12:29:18, IP: 192.168.1.15, Error: Permission denied - /var/www/html\n2024-11-05 12:30:02, IP: 203.0.113.33, Error: Database connection failed\n2024-11-05 12:30:48, IP: 192.168.1.20, Error: User not found - Username: "admin"\n2024-11-05 12:31:25, IP: 203.0.113.45, Error: Insufficient disk space - /dev/sda1\n2024-11-05 12:32:07, IP: 192.168.1.25, Error: Configuration file missing - /etc/config.cfg\n2024-11-05 12:32:56, IP: 203.0.113.50, Error: Unauthorized access attempt\n2024-11-05 12:33:35, IP: 192.168.1.30, Error: SSL handshake failed\n2024-11-05 12:34:22, IP: 203.0.113.55, Error: Connection refused - IP: 192.168.1.100\n2024-11-05 12:35:12, IP: 192.168.1.35, Error: Invalid input format - Expected JSON\n')
console.log(data);
