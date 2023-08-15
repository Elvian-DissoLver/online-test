<?php
    function binary_search($array, $value, $low, $high) {
        if ($high < $low) {
            return -1;
        } else {
            $mid = (int) ($low + ($high - $low) / 2);
            if ($array[$mid] > $value) {
                return binary_search($array, $value, $low, $mid-1);
            } else if ($array[$mid] < $value) {
                return binary_search($array, $value, $mid+1, $high);
            } else {
                return $mid;
            }
        }
    }
    $array = array();
    for ($i=0; $i<10000; $i++) {
        fscanf(STDIN, "%d", $array[$i]);
    }
    for ($i=0; $i<10000; $i++) {
        fscanf(STDIN, "%d", $value);
        $answer = binary_search($array, $value, 0, 9999);
        printf("%d\n", $answer);
    }
?>