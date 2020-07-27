
var __toByte = function(e) {
    function t(t) {
        return e.apply(this, arguments)
    }
    return t.toString = function() {
        return e.toString()
    }
        ,
        t
}(function(e) {
    if (e < -128)
        return __toByte(128 - (-128 - e));
    if (e >= -128 && e <= 127)
        return e;
    if (e > 127)
        return __toByte(-129 + e - 127);
    throw new Error("1001")
});


var i = function(e, t) {
    return __toByte(e + t)
}
    , r = function(e, t) {
    if (null == e)
        return null;
    if (null == t)
        return e;
    for (var n = [], r = t.length, o = 0, a = e.length; o < a; o++)
        n[o] = i(e[o], t[o % r]);
    return n
}
    , o = function(e, t) {
    return e = __toByte(e),
        t = __toByte(t),
        __toByte(e ^ t)
}
    , a = function(e, t) {
    if (null == e || null == t || e.length != t.length)
        return e;
    for (var n = [], i = e.length, r = 0, a = i; r < a; r++)
        n[r] = o(e[r], t[r]);
    return n
}
    , s = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]
    , l = function(e) {
    var t = [];
    return t.push(s[e >>> 4 & 15]),
        t.push(s[15 & e]),
        t.join("")
}
    , u = function(e) {
    var t = e.length;
    if (null == e || t < 0)
        return new String("");
    for (var n = [], i = 0; i < t; i++)
        n.push(l(e[i]));
    return n.join("")
}
    , f = function(e) {
    if (null == e || 0 == e.length)
        return [];
    for (var t = new String(e), n = [], i = t.length / 2, r = 0, o = 0; o < i; o++) {
        var a = parseInt(t.charAt(r++), 16) << 4
            , s = parseInt(t.charAt(r++), 16);
        n[o] = __toByte(a + s)
    }
    return n
}
    , c = function(e) {
    if (null == e || void 0 == e)
        return e;
    for (var t = encodeURIComponent(e), n = [], i = t.length, r = 0; r < i; r++)
        if ("%" == t.charAt(r)) {
            if (!(r + 2 < i))
                throw new Error("1009");
            n.push(f(t.charAt(++r) + "" + t.charAt(++r))[0])
        } else
            n.push(t.charCodeAt(r));
    return n
}
    , j = function(e) {
    var t = [];
    return t[0] = e >>> 24 & 255,
        t[1] = e >>> 16 & 255,
        t[2] = e >>> 8 & 255,
        t[3] = 255 & e,
        t
}
    , d = function(e) {
    var t = j(e);
    return u(t)
}
    , h = function(e, t, n) {
    var i = [];
    if (null == e || 0 == e.length)
        return i;
    if (e.length < n)
        throw new Error("1003");
    for (var r = 0; r < n; r++)
        i[r] = e[t + r];
    return i
}
    , p = function(e, t, n, i, r) {
    if (null == e || 0 == e.length)
        return n;
    if (null == n)
        throw new Error("1004");
    if (e.length < r)
        throw new Error("1003");
    for (var o = 0; o < r; o++)
        n[i + o] = e[t + o];
    return n
}
    , y = function(e) {
    for (var t = [], n = 0; n < e; n++)
        t[n] = 0;
    return t
}
    , v = function(e) {
    return null == e || void 0 == e || "" == e
}
    , g = function() {
    return ["i", "/", "x", "1", "X", "g", "U", "0", "z", "7", "k", "8", "N", "+", "l", "C", "p", "O", "n", "P", "r", "v", "6", "\\", "q", "u", "2", "G", "j", "9", "H", "R", "c", "w", "T", "Y", "Z", "4", "b", "f", "S", "J", "B", "h", "a", "W", "s", "t", "A", "e", "o", "M", "I", "E", "Q", "5", "m", "D", "d", "V", "F", "L", "K", "y"]
}
    , b = function() {
    return "3"
}
    , m = function(e, t, n) {
    var i, r, o, a = g(), s = b(), l = [];
    if (1 == n)
        i = e[t],
            r = 0,
            o = 0,
            l.push(a[i >>> 2 & 63]),
            l.push(a[(i << 4 & 48) + (r >>> 4 & 15)]),
            l.push(s),
            l.push(s);
    else if (2 == n)
        i = e[t],
            r = e[t + 1],
            o = 0,
            l.push(a[i >>> 2 & 63]),
            l.push(a[(i << 4 & 48) + (r >>> 4 & 15)]),
            l.push(a[(r << 2 & 60) + (o >>> 6 & 3)]),
            l.push(s);
    else {
        if (3 != n)
            throw new Error("1010");
        i = e[t],
            r = e[t + 1],
            o = e[t + 2],
            l.push(a[i >>> 2 & 63]),
            l.push(a[(i << 4 & 48) + (r >>> 4 & 15)]),
            l.push(a[(r << 2 & 60) + (o >>> 6 & 3)]),
            l.push(a[63 & o])
    }
    return l.join("")
}
    , _ = function(e) {
    if (null == e || void 0 == e)
        return null;
    if (0 == e.length)
        return "";
    var t = 3;
    try {
        for (var n = [], i = 0; i < e.length; ) {
            if (!(i + t <= e.length)) {
                n.push(m(e, i, e.length - i));
                break
            }
            n.push(m(e, i, t)),
                i += t
        }
        return n.join("")
    } catch (r) {
        throw new Error("1010")
    }
}
    , w = function(e) {
    return _(c(e))
}
    , T = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117]
    , S = function(e) {
    var t = 4294967295;
    if (null != e)
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            t = t >>> 8 ^ T[255 & (t ^ i)]
        }
    return d(4294967295 ^ t, 8)
}
    , E = function(e) {
    return S(null == e ? [] : c(e))
}
    , R = [120, 85, -95, -84, 122, 38, -16, -53, -11, 16, 55, 3, 125, -29, 32, -128, -94, 77, 15, 106, -88, -100, -34, 88, 78, 105, -104, -90, -70, 90, -119, -28, -19, -47, -111, 117, -105, -62, -35, 2, -14, -32, 114, 23, -21, 25, -7, -92, 96, -103, 126, 112, -113, -65, -109, -44, 47, 48, 86, 75, 62, -26, 72, -56, -27, 66, -42, 63, 14, 92, 59, -101, 19, -33, 12, -18, -126, -50, -67, 42, 7, -60, -81, -93, -86, 40, -69, -37, 98, -63, -59, 108, 46, -45, 93, 102, 65, -79, 73, -23, -46, 37, -114, -15, 44, -54, 99, -10, 60, -96, 76, 26, 61, -107, 18, -116, -55, -40, 57, -76, -82, 45, 0, -112, -77, 29, 43, -30, 109, -91, -83, 107, 101, 81, -52, -71, 84, 36, -41, 68, 39, -75, -122, -6, 11, -80, -17, -74, -73, 35, 49, -49, -127, 80, 103, 79, -25, 52, -43, 56, 41, -61, -24, 17, -118, 115, -38, 8, -78, 33, -85, -106, 58, -98, -108, 94, 116, -125, -51, -9, 71, 82, 87, -115, 9, 69, -123, 123, -117, 113, -22, -124, -87, 64, 13, 21, -89, -2, -99, -97, 1, -4, 34, 20, 83, 119, 30, -12, -110, -66, 118, -48, 6, -36, 104, -58, -102, 97, 5, -20, 31, -72, 70, -39, 67, -68, -57, 110, 89, 51, 10, -120, 28, 111, 127, 22, -3, 54, 53, -1, 100, 74, 50, 91, 27, -31, -5, -64, 124, -121, 24, -13, 95, 121, -8, 4]
    , k = 4
    , C = 4
    , O = 4
    , I = 4
    , $ = function(e) {
    var t = [];
    if (null == e || void 0 == e || 0 == e.length)
        return y(C);
    if (e.length >= C)
        return h(e, 0, C);
    for (var n = 0; n < C; n++)
        t[n] = e[n % e.length];
    return t
}
    , X = function(e) {
    if (null == e || void 0 == e || 0 == e.length)
        return y(k);
    var t = e.length
        , n = 0;
    n = t % k <= k - O ? k - t % k - O : 2 * k - t % k - O;
    var i = [];
    p(e, 0, i, 0, t);
    for (var r = 0; r < n; r++)
        i[t + r] = 0;
    var o = j(t);
    return p(o, 0, i, t + n, O),
        i
}
    , x = function(e) {
    if (null == e || e.length % k != 0)
        throw new Error("1005");
    for (var t = [], n = 0, i = e.length / k, r = 0; r < i; r++) {
        t[r] = [];
        for (var o = 0; o < k; o++)
            t[r][o] = e[n++]
    }
    return t
}
    , A = function(e) {
    var t = e >>> 4 & 15
        , n = 15 & e
        , i = 16 * t + n;
    return R[i]
}
    , P = function(e) {
    if (null == e)
        return null;
    for (var t = [], n = 0, i = e.length; n < i; n++)
        t[n] = A(e[n]);
    return t
}
    , N = function() {
    for (var e = [], t = 0; t < I; t++) {
        var n = 256 * Math.random();
        n = Math.floor(n),
            e[t] = __toByte(n)
    }
    return e
}
    , M = function(e, t) {
    if (null == e)
        return null;
    for (var n = __toByte(t), i = [], r = e.length, a = 0; a < r; a++)
        i.push(o(e[a], n));
    return i
}
    , D = function(e, t) {
    if (null == e)
        return null;
    for (var n = __toByte(t), r = [], o = e.length, a = 0; a < o; a++)
        r.push(i(e[a], n));
    return r
}
    , M = function(e, t) {
    if (null == e)
        return null;
    for (var n = __toByte(t), i = [], r = e.length, a = 0; a < r; a++)
        i.push(o(e[a], n));
    return i
}
    , L = function(e) {
    var t = M(e, 56)
        , n = D(t, -40)
        , i = M(n, 103);
    return i
}
    , V = function(e, t) {
    null == e && (e = []);
    var n = N();
    t = $(t),
        t = a(t, $(n)),
        t = $(t);
    var i = t
        , o = X(e)
        , s = x(o)
        , l = [];
    p(n, 0, l, 0, I);
    for (var u = s.length, f = 0; f < u; f++) {
        var c = L(s[f])
            , j = a(c, t)
            , d = r(j, i);
        j = a(d, i);
        var h = P(j);
        h = P(h),
            p(h, 0, l, f * k + I, k),
            i = h
    }
    return l
}
    , B = function(e) {
    var t = "14731382d816714fC59E47De5dA0C871D3F";
    if (null == t || void 0 == t)
        throw new Error("1008");
    null != e && void 0 != e || (e = "");
    var n = e + E(e)
        , i = c(n)
        , r = c(t)
        , o = V(i, r);
    return _(o)
};

//获取 uuid
var uuid = function uuid_a(e, t) {
    var n = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("")
        , a = []
        , i = void 0;
    if (t = t || n.length,
        e)
        for (i = 0; i < e; i++)
            a[i] = n[0 | Math.random() * t];
    else {
        var r = void 0;
        for (a[8] = a[13] = a[18] = a[23] = "-",
                 a[14] = "4",
                 i = 0; i < 36; i++)
            a[i] || (r = 0 | 16 * Math.random(),
                a[i] = n[19 === i ? 3 & r | 8 : r])
    }
    return a.join("")
}

//获取cb值
function get_cb() {
    return B(uuid(32))
}

//用于生成指定位数的随机字符串
function get_ramdom_str(e) {
    for (var n = [], i = 0; i < e; i++) {
        var r = Math.random() * 62  // var r = Math.random() * je
            , r = Math.floor(r);
        n.push("aZbY0cXdW1eVf2Ug3Th4SiR5jQk6PlO7mNn8MoL9pKqJrIsHtGuFvEwDxCyBzA".charAt(r))  // ce = "aZbY0cXdW1eVf2Ug3Th4SiR5jQk6PlO7mNn8MoL9pKqJrIsHtGuFvEwDxCyBzA"
    }
    return n.join("")
}

/***
 * 下面是生成指纹fp
 * **/
//随机打乱数组
function randArr(arr) {
    for (var i = 0; i < arr.length; i++) {
        var iRand = parseInt(arr.length * Math.random());
        var temp = arr[i];
        arr[i] = arr[iRand];
        arr[iRand] = temp;
    }
    return arr;
}

//辅助生成fp
function my_a(e, n, i) {
    var t = [66,60,79,60,7,17,33,96,68,0,2,1423857449,-2,3,-3,3432918353,1555261956,4,2847714899,-4,5,-5,2714866558,1281953886,6,-6,198958881,1141124467,2970347812,-7,7,3110523913,8,-8,2428444049,-9,9,10,-10,-11,11,2563907772,-12,12,13,2282248934,-13,2154129355,-14,14,15,-15,16,-16,17,-17,-18,18,19,-19,20,-20,21,-21,-22,22,-23,23,24,-24,25,-25,-26,26,27,-27,28,-28,29,-29,30,-30,31,-31,33,-33,-32,32,-34,-35,34,35,37,-37,36,-36,38,39,-39,-38,40,41,-41,-40,42,-43,-42,43,45,-45,-44,44,47,-46,-47,46,48,-49,-48,49,-50,51,-51,50,570562233,53,-52,52,-53,-54,-55,55,54,503444072,57,-56,-57,56,59,58,-59,-58,60,61,-61,-60,62,63,-63,-62,-64,711928724,-66,67,-65,65,-67,66,64,-71,-69,69,68,70,-68,-70,71,-72,3686517206,-74,-73,73,75,74,-75,72,-79,76,79,78,-78,-76,77,-77,3554079995,-81,81,-82,-83,80,-80,82,83,-84,84,85,-86,-87,86,-85,87,90,-88,-89,-90,88,89,91,-91,94,92,95,-94,93,-93,-95,-92,-98,97,98,-97,-99,96,99,-96,-100,3272380065,102,-102,-101,-103,103,100,101,-107,-104,105,104,106,-106,-105,107,109,-109,-108,-111,110,-110,111,108,251722036,115,-115,112,-114,-112,113,114,-113,-117,119,-116,-119,117,-118,118,116,123,-120,122,-121,120,-122,-123,121,125,127,3412177804,-127,126,-126,124,-125,-124,-128,128,-129,1843258603,3803740692,984961486,3939845945,4195302755,4066508878,255,1706088902,256,1969922972,365,2097651377,376229701,853044451,752459403,1000,426522225,3772115230,615818150,3904427059,4167216745,4027552580,3654703836,1886057615,879679996,3518719985,3244367275,2013776290,3373015174,1759359992,285281116,1622183637,1006888145,10000,1231636301,83908371,1090812512,2463272603,1373503546,2596254646,2321926636,1504918807,2181625025,2882616665,2747007092,3009837614,3138078467,397917763,81470997,829329135,2657392035,956543938,2517215374,2262029012,40735498,2394877945,3266489909,702138776,2808555105,2936675148,1258607687,1131014506,3218104598,3082640443,1404277552,565507253,534414190,1541320221,1913087877,2053790376,1789927666,3965973030,3826175755,4107580753,4240017532,1658658271,3579855332,3708648649,3453421203,3317316542,1873836001,1742555852,461845907,3608007406,1996959894,3747672003,3485111705,2137656763,3352799412,213261112,3993919788,1.01,3865271297,4139329115,4275313526,282753626,1068828381,2768942443,2909243462,936918000,3183342108,27492,141376813,3050360625,654459306,2617837225,1454621731,2489596804,2227061214,1591671054,2362670323,4294967295,1308918612,2246822507,795835527,1181335161,414664567,4279200368,1661365465,1037604311,4150417245,3887607047,1802195444,4023717930,2075208622,1943803523,901097722,628085408,755167117,3322730930,3462522015,3736837829,3604390888,2366115317,0.4,2238001368,2512341634,2647816111,-0.2,314042704,1510334235,900000,58964,1382605366,31158534,450548861,3020668471,1119000684,3160834842,2898065728,1256170817,2765210733,3060149565,3188396048,2932959818,124634137,2797360999,366619977,62317068,-0.26,1202900863,498536548,1340076626,2405801727,2265490386,1594198024,1466479909,2547177864,249268274,2680153253,2125561021,3294710456,855842277,3423369109,0.732134444,3705015759,3569037538,1994146192,1711684554,1852507879,997073096,733239954,4251122042,601450431,4111451223,167816743,3855990285,3988292384,3369554304,3233442989,3495958263,3624741850,65535,453092731,-0.9,2094854071,1957810842,325883990,4057260610,1684777152,4189708143,3915621685,162941995,1812370925,3775830040,783551873,3134207493,1172266101,2998733608,2724688242,1303535960,2852801631,112637215,1567103746,651767980,1426400815,906185462,2211677639,1047427035,2344532202,2607071920,2466906013,225274430,544179635,2176718541,2312317920,1483230225,1342533948,2567524794,2439277719,1088359270,671266974,1219638859,840000,953729732,3099436303,2966460450,817233897,2685067896,2825379669,4089016648,4224994405,3943577151,3814918930,476864866,1634467795,335633487,1762050814,1,2044508324,-1,3401237130,3268935591,3524101629,3663771856,1907459465]
    var u = ["5","6","InactiveCaptionText","7","WEBZEN Browser Extension","8","9",":","DivX Browser Plug-In",";","=","Uplay PC","canvas exception","A","B","C","D","E","微软雅黑","F","Harrington","G","H","I","J","Gnome Shell Integration","K","L","M","N","O","P","Q","R","S","Niagara Solid","T","SefClient Plugin","U","V","1111","W","X","Y","Z","Goudy Old Style","\\","Roblox Launcher Plugin","Microsoft Office 2013","QQMusic","a","Eurostile","b","rmocx.RealPlayer G2 Control.1","c","Scripting.Dictionary","d","仿宋","e","f","g","h","Ma-Config.com plugin","i","1010","Casual","j","k","l","m","n","o","p","1008","ct","doNotTrack","q","setTimeout","丽宋 Pro","r","Gisha","getTimezoneOffset","s","1005","1004","t","u","1003","v","1001","w","x","drawArrays","y","z","{","}","~","font","1009","=null; path=/; expires=","Shell.UIHelper","toDataURL","WindowText","language","do","丽黑 Pro","HighlightText","div","MenuText","AOL Media Playback Plugin","Citrix online plug-in","ec","Desdemona","InactiveBorder","RealPlayer","HELLO",", 'code':","em","npTongbuAddin","createElement","phantom","MS PMincho","楷体","eval","ex","DivX VOD Helper Plug-in","新细明体","QuickTimeCheckObject.QuickTimeCheck.1","FlyOrDie Games Plugin","attachShader","PlayOn Plug-in","getTime","1.01","Broadway","fp","Alawar NPAPI utils","Forte","hashCode","方正姚体","ESN Sonar API","HPDetect","Bitdefender QuickScan","IE Tab plugin","',","ButtonFace","cpuClass","Century Gothic","Online Storage plug-in","Safer Update","Msxml2.DOMDocument","Engravers MT","Silverlight Plug-In","Google Gears 0.5.33.0","Citrix ICA Client","alphabetic","VDownloader","华文楷体","attrVertex","宋体","cookie","%22","%26","Centaur","4game","Rockwell","LogMeIn Plugin 1.0.0.961","Octoshape Streaming Services","toGMTString","th=/","SumatraPDF Browser Plugin","PDF.PdfCtrl","fillStyle","je","Adobe Ming Std","TorchHelper","Franklin Gothic Heavy","华文仿宋","Harmony Plug-In","Gigi","v1.1","Kino MT","SimHei","AliSSOLogin plugin","RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)","Yandex PDF Viewer","Citrix Receiver Plug-in","mai","top","AcroPDF.PDF","canvas api exception","InactiveCaption","Menu","precision mediump float; varying vec2 varyinTexCoordinate; void main() {   gl_FragColor = vec4(varyinTexCoordinate, 0, 1); }","QQ2013 Firefox Plugin","Google Update","华文彩云","eMusicPlugin DLM6","Web Components","Babylon ToolBar","Coowon Update"]
    var l = ["", "GrayText", "parent", "幼圆", "plugins", "AdobeExManDetect", "0010", "Google Earth Plugin", "Veetle TV Core", "0007", "0004", "0002", "0003", "0000", "0001", "Unity Player", "Skype Web Plugin", "WebKit-integrierte PDF", "gdxidpyhxdE", "Bell MT", "0008", "getSupportedExtensions", "setTime", "0009", "SafeSearch", "\"", "$", "Univers", "%", "&", "'", "1110", "get plugin string exception", "ThreeDShadow", "+", ",", "-", "Arab", "苹果丽细宋", ".", "FUZEShare", "/", "0", "1", "2", "3", "4", "仿宋_GB2312"]

    var r;
    // var o = [l[44], l[46], l[42], u[50], u[43], u[22], u[63], u[32], u[91], u[27], u[46], u[44], u[86], u[59], u[39], u[68], u[60], u[5], u[82], u[31], u[28], u[33], u[1], u[56], u[21], u[67], u[42], u[88], u[30], l[41], u[15], u[52], u[90], u[6], u[41], u[16], u[66], l[43], u[17], u[36], u[93], u[23], u[34], u[54], u[69], u[58], u[71], u[24], u[94], l[45], u[3], u[76], u[85], u[61], u[14], u[79], u[38], l[34], u[26], u[29], u[13], u[0], u[72], u[70]];
    // var a = u[19];
    var a = "F";
    var s = [];
    //目前先写死o为：
    var o = ["2", "4", "0", "a", "Y", "H", "i", "Q", "x", "L", "\\", "Z", "u", "f", "V", "l", "g", "8", "s", "P", "M", "R", "6", "d", "G", "k", "X", "v", "O", "/", "C", "b", "w", "9", "W", "D", "j", "1", "E", "T", "y", "I", "S", "c", "m", "e", "o", "J", "z", "3", "7", "q", "t", "h", "B", "r", "U", "+", "K", "N", "A", "5", "p", "n"];

    if (i == t[535])
        i = e[n],
            r = t[9],
            s.push(o[i >>> t[10] & t[147]]),
            s.push(o[(i << t[17] & t[116]) + (r >>> t[17] & t[50])]),
            s.push(a),
            s.push(a);
    else if (i == t[10])
        i = e[n],
            r = e[n + t[535]],
            e = t[9],
            s.push(o[i >>> t[10] & t[147]]),
            s.push(o[(i << t[17] & t[116]) + (r >>> t[17] & t[50])]),
            s.push(o[(r << t[10] & t[142]) + (e >>> t[24] & t[13])]),
            s.push(a);
    else {
        if (i != t[13])
            throw Error(u[64]);
        i = e[n],
            r = e[n + t[535]],
            e = e[n + t[10]],
            s.push(o[i >>> t[10] & t[147]]),
            s.push(o[(i << t[17] & t[116]) + (r >>> t[17] & t[50])]),
            s.push(o[(r << t[10] & t[142]) + (e >>> t[24] & t[13])]),
            s.push(o[e & t[147]])
    }
    return s.join(l[0])
}

//获取随机指纹fp，后续需要测试生成的指纹是否有效
function get_fp(){
    var Y = [-62, 39, 21, 127, 6, 15, -70, 106, 127, -70, -38, 9, -24, -63, -23, 62, -99, 110, 118, 119, -13, -83, 56, 110, 94, 26, -76, -99, -123, -125, -102, 54, -82, 70, -71, -70, 61, -51, -16, 97, -17, 10, -121, -26, 30, -102, -58, 117, -7, -23, 122, 24, 115, 16, 91, 42, 100, 28, -39, 20, -94, -118, -8, 33, 113, 86, 76, -4, 112, 10, 37, 92, -113, 14, -4, 118, 127, 55, -98, -92, 120, -75, 62, 27, -81, -34, 72, -39, 75, -100, -54, -101, 40, 105, -24, 25, 10, 63, -21, -119, 65, 77, 107, 12, -8, -111, 118, 5, 5, 110, -9, 96, 5, -96, 127, 105, 31, 29, -75, 61, 47, 74, 41, -117, 88, -106, -87, -75, -114, 59, -40, -94]
    Y = randArr(Y);

    var Oe = "";
    var Ie = 3;
    for (var K = [], $e = 0; $e < Y.length; ) {
        if (!($e + Ie <= Y.length)) {
            K.push(my_a(Y, $e, Y.length - $e));
            break
        }
        K.push(my_a(Y, $e, Ie)),
            $e += Ie
    }
    Oe = K.join("")
    var _t = (new Date()).getTime() + 900000;
    var my_h = Oe + ":" + _t;// h = h + u[7] + p
    return my_h;
}

module.exports = {
    uuid,//需要指定长度，目前使用的是32位
    get_cb,//需要传递参数长度为32位的uuid/其他字符串
    get_ramdom_str,//需要指定长度，callback对应为7位
    get_fp // 生成随机指纹fp
}

var my_j = Math.random().toString(36).slice(2, 9)
console.log(my_j)

console.log(get_fp())