<!DOCTYPE html>
<html>
<body>

<script>
var multiply = function() {
  console.log(arguments);
  return arguments[0] * arguments[1];
};

document.write( multiply(2, 3) );
</script>

</body>
</html>
