
module.exports = (head, body, tail) => {
	return `<!-- Doctype HTML5 -->
	<!DOCTYPE html>
	<html lang='en'>
	<head>
		${head}
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
	</head>
	<body>${body}</body>
	${tail}
</html>`;
};