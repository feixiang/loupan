<?php

set_time_limit(0);

doTask();
function doTask(){
	$input = "images.txt";
	$lines = file_get_contents($input);
	$list = explode("\r\n", $lines);
	
	downloadList($list);
}


function downloadList($list){
	$dir = "images";
	foreach ($list as $value) {
		$image = file_get_contents($value);
		$output = $dir . "/" . basename($value);
		_log($output);
		file_put_contents($output,$image);
	}
}

function _log($string){
	echo "$string\n";
}

?>
	
