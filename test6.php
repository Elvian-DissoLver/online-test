<?php
function permutations() {
    global $running;
    global $characters;
    global $bitmask;
    if (count($running) == count($characters)) {
        printf("%s\n", implode($running));
    } else {
        for ($i=0; $i<count($characters); $i++) {
            if ( (($bitmask>>$i)&1) == 0 ) {
                array_push($running, $characters[$i]);
                $bitmask |= (1<<$i);
                permutations();
                array_pop($running);
                $bitmask ^= 1<<$i;
            }
        }
    }
}

fscanf(STDIN, '%s', $raw_input);
$characters = str_split($raw_input);
$running = array();
$bitmask = 0;
permutations();
?>