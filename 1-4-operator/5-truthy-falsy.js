
    // truthy, false: js는 논리가 아닌 데이터를 논리로 표현할 수 있다.
    // js는 0, '', null, undefined NaN을 모두 falsy로 취급
    if (false) console.log('안녕하세요1');
    if (0) console.log('안녕하세요2');
    if (null) console.log('안녕하세요3');
    if (undefined) console.log('안녕하세요4');
    if (NaN) console.log('안녕하세요5');
    if ('') console.log('안녕하세요6');
    console.log('======================');
    if (' ') console.log('안녕하세요6');
    if ('hello') console.log('안녕하세요7');
    if (100) console.log('안녕하세요8');
    if (-888.55) console.log('안녕하세요9');
    if ({ }) console.log('안녕하세요10');
    if ([]) console.log('안녕하세요11');
    if ([1,2,3]) console.log('안녕하세요12');
    if (function () {}) console.log('안녕하세요13');
    if (() => {}) console.log('안녕하세요14');
