// Auto-generated code. Do not edit.
namespace myImages {

    helpers._registerFactory("image", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "#@dhYoL-*+ccDf22fOk@":
            case "enemy":return img`
........................
........................
........................
........................
..........ffff..........
........ff1111ff........
.......fb111111bf.......
.......f11111111f.......
......fd11111111df......
......fd11111111df......
......fddd1111dddf......
......fbdbfddfbdbf......
......fcdcf11fcdcf......
.......fb111111ffff.....
......fffcdb1bc111cf....
....fc111cbfbf1b1b1f....
....f1b1b1ffffbfbfbf....
....fbfbfffffff.........
.........fffff..........
..........fff...........
........................
........................
........................
........................
`;
            case "image3":
            case "coin2":return img`
. . b b b . . . 
. b 5 5 5 b . . 
b 5 d 3 d 5 b . 
b 5 3 5 1 5 b . 
c 5 3 5 1 d c . 
c 5 d 1 d d c . 
. f d d d f . . 
. . f f f . . . 
`;
            case "image4":
            case "coin3":return img`
. . b b b . . . 
. b 5 5 5 b . . 
b 5 d 3 d 5 b . 
b 5 3 5 1 5 b . 
c 5 3 5 1 d c . 
c 5 d 1 d d c . 
. f d d d f . . 
. . f f f . . . 
`;
            case "image5":
            case "coin22":return img`
. . b b b . . . 
. b 5 5 5 b . . 
b 5 d 3 d 5 b . 
b 5 3 5 1 5 b . 
c 5 3 5 1 d c . 
c 5 d 1 d d c . 
. f d d d f . . 
. . f f f . . . 
`;
            case "image2":
            case "coin":return img`
4 4 4 . . 4 4 4 4 4 . . . . . . 
4 5 5 4 4 5 5 5 5 5 4 4 . . . . 
b 4 5 5 1 5 1 1 1 5 5 5 4 . . . 
. b 5 5 5 5 1 1 5 5 1 1 5 4 . . 
. b d 5 5 5 5 5 5 5 5 1 1 5 4 . 
b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 . 
c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4 
c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4 
c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4 
. c 4 5 5 5 5 d d d 5 5 5 5 5 b 
. c 4 d 5 4 5 d 4 4 d 5 5 5 4 c 
. . c 4 4 d 4 4 4 4 4 d d 5 d c 
. . . c 4 4 4 4 4 4 4 4 5 5 5 4 
. . . . c c b 4 4 4 b b 4 5 4 4 
. . . . . . c c c c c c b b 4 . 
`;
            case "image1":
            case "player":return img`
. . . . . . . . . . . c c . . . 
. . . . . . . c c c c 6 3 c . . 
. . . . . . c 6 3 3 3 3 6 c . . 
. . c c . c 6 c c 3 3 3 3 3 c . 
. b 5 5 c 6 c 5 5 c 3 3 3 3 3 c 
. f f 5 c 6 c 5 f f 3 3 3 3 3 c 
. f f 5 c 6 c 5 f f 6 3 3 3 c c 
. b 5 5 3 c 3 5 5 c 6 6 6 6 c c 
. . b 5 5 3 5 5 c 3 3 3 3 3 3 c 
. c c 5 5 5 5 5 b c c 3 3 3 3 c 
c 5 5 4 5 5 5 4 b 5 5 c 3 3 c . 
b 5 4 b 4 4 4 4 b b 5 c b b . . 
c 4 5 5 b 4 b 5 5 5 4 c 4 5 b . 
c 5 5 5 c 4 c 5 5 5 c 4 c 5 c . 
c 5 5 5 5 c 5 5 5 5 c 4 c 5 c . 
. c c c c c c c c c . . c c c . 
`;
        }
        return null;
    })

    helpers._registerFactory("animation", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "walkright":
            case "anim1":return [img`
. . . . . . . . . . . c c . . . 
. . . . . . . c c c c 6 3 c . . 
. . . . . . c 6 3 3 3 3 6 c . . 
. . c c . c 6 c c 3 3 3 3 3 c . 
. b 5 5 c 6 c 5 5 c 3 3 3 3 3 c 
. f f 5 c 6 c 5 f f 3 3 3 3 3 c 
. f f 5 c 6 c 5 f f 6 3 3 3 c c 
. b 5 5 3 c 3 5 5 c 6 6 6 6 c c 
. . b 5 5 3 5 5 c 3 3 3 3 3 3 c 
. . c 5 5 5 5 b c c 3 3 3 3 3 c 
. . c 4 5 5 4 b 5 5 c 3 3 3 c . 
. c 5 b 4 4 b b 5 c c b b b . . 
. c 4 4 b 5 5 5 4 c 4 4 4 5 b . 
. c 5 4 c 5 5 5 c 4 4 4 c 5 c . 
. c 5 c 5 5 5 5 c 4 4 4 c c c . 
. . c c c c c c c . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . c c . . . . 
. . . . . . c c c c 6 3 c . . . 
. . . . . c 6 6 3 3 3 6 c . . . 
. . . . c 6 6 3 3 3 3 3 3 c . . 
b c c c 6 6 c c 3 3 3 3 3 3 c . 
b 5 5 c 6 c 5 5 c 3 3 3 3 3 c . 
f f 5 c 6 c 5 f f 6 3 3 3 c c . 
f f 5 c c c 5 f f 6 6 6 6 c c . 
. b 5 5 3 5 5 c 3 3 3 3 3 3 c . 
. c 5 5 5 5 4 c c c 3 3 3 3 c . 
. c 4 5 5 4 4 b 5 5 c 3 3 c . . 
. c 5 b 4 4 b b 5 c b b c . . . 
. c c 5 4 c 5 5 5 c c 5 c . . . 
. . . c c 5 5 5 5 c c c c . . . 
. . . . c c c c c c . . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . c c . . . 
. . . . . . . c c c c 6 3 c . . 
. . . . . . c 6 6 3 3 3 6 c . . 
. . . . . c 6 6 3 3 3 3 3 3 c . 
. b c c c 6 6 c c 3 3 3 3 3 3 c 
. b 5 5 c 6 c 5 5 c 3 3 3 3 3 c 
. f f 5 c 6 c 5 f f 6 3 3 3 c c 
. f f 5 c c c 5 f f 6 6 6 6 c c 
. . b 5 5 3 5 5 c c c 3 3 3 3 c 
. . c 5 5 5 5 5 b 5 5 c 3 3 3 c 
. c 4 4 5 5 4 4 b b 5 c 3 3 c . 
. c 5 5 b 4 4 4 b 5 5 5 b c . . 
. c 5 5 5 4 4 4 c 5 5 5 c b . . 
. . c c c c 4 c 5 5 5 5 c c . . 
. . . . c c c c c c c c c c . . 
`, img`
. . . . . . . . . . . c c . . . 
. . . . . . . c c c c 6 3 c . . 
. . . . . . c 6 3 3 3 3 6 c . . 
. . c c . c 6 c c 3 3 3 3 3 c . 
. b 5 5 c 6 c 5 5 c 3 3 3 3 3 c 
. f f 5 c 6 c 5 f f 3 3 3 3 3 c 
. f f 5 c 6 c 5 f f 6 3 3 3 c c 
. b 5 5 3 c 3 5 5 c 6 6 6 6 c c 
. . b 5 5 3 5 5 c 3 3 3 3 3 3 c 
. c c 5 5 5 5 4 c c 3 3 3 3 3 c 
c 5 5 4 5 5 4 c 5 5 c 3 3 3 c . 
b 5 4 b 4 4 4 c 5 5 5 b c c . . 
c 4 5 5 b 4 4 c 5 5 5 c b b . . 
c 5 5 5 c 4 c 5 5 5 5 c c 5 b . 
c 5 5 5 5 c 4 c c c c c c 5 c . 
. c c c c c c . . . . . c c c . 
`];
        }
        return null;
    })

    helpers._registerFactory("song", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "song1":
            case "song":return hex`0078000408020500001c00010a006400f40164000004000000000000000000000000000500000407000000400002191d01001c000f05001202c102c201000405002800000064002800030000060000044f0000000400012704000800012508000c0001240c001400012514001800012418001c00012020002400012524002800012428003000012530003400012434003800012238003c0001223c00400002222502001c000c960064006d019001000478002c010000640032000000000a000005550000000400011e04000800011d08000c00011d0c001000011e18001c00011b1c002000012020002400011e24002800012028002c00011e2c003000021b1d30003400011d34003800011e38003c00011e3c004000011d08001c000e050046006603320000040a002d0000006400140001000002000002420000000400012404000800012008000c00011e0c001000012014001800012018001c00011d20002400012224002800012228002c00012430003400012234003800012009010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8004e0000000100010b08000900010a0c000d00010a14001500010918001900010a1c001d00010620002100010b24002500010928002900010b30003100010b3400350001083800390001073c003d00010a`;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
