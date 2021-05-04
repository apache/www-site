BEGIN {
    META = 1;
}
// {
    if ( META == 2 ) {
	M = index($0," ");
	if ( M == 1 ) next;
	META = 1;
    }
    if ( META > 0 ) {
	L = index($0,"Notice:");
	if ( L == 1 ) {
	    META = 2;
	    print "license: https://www.apache.org/licenses/LICENSE-2.0";
	    next;
	}
	N = match($0,/\:[ \t]*/);
	if ( N > 0 ) {
	    print $0;
	    next;
	}
	META = 0;
	print "";
    } else {
	K = sub(/ *#* *{/,"  {")
	print $0;
    }
}
END {
    if ( META > 0 ) {
	print "";
    }	
}
