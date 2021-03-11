function Jpass() {

// JPass v1.2
// Javascript password generator
// (c) Kelv 2000 kelv@kelv.net
//
// v1.0 - Initial release  : 15:43 / 3/3/2000
// v1.1 - 10:58 / 8/3/2000 : Fixed variable name bug which stopped Jpass working in Netscape Navigator.
// v1.2 - 19:48 / 3/10/2021: Refactored a little bit later on.
//
// Usage - (new Jpass()).generate();
//
// http://www.kelv.net

    let consts = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
    let hard_consts = ['b','c','d','f','g','h','k','m','p','s','t','v','z'];
    let link_consts = ['h','l','r'];
    let vowels = ['a','e','i','o','u'];
    let digits = ['1','2','3','4','5','6','7','8','9'];
    let elements = [ hard_consts, link_consts, vowels, consts, digits, hard_consts, vowels, consts ];

    let _this = this;

    this.randchar = function(arg) {
        var char = '';
        var seed = Math.floor(Math.random() * arg.length);
        char = arg[seed];
        return char;
    }

    this.generate = function() {
        var new_pass= '';
        elements.forEach(function(list) {
	     new_pass += _this.randchar(list);
        })
	return new_pass
    }

}
