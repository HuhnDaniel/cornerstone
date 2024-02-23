function NewlineText(overview, subID = 0) {
    const noWrap = subID === 11 ? 'whitespace-nowrap' : '';
    const text = overview.text;
    const newText = text.split('\n').map((str, i) => {
        const newStr = str.split(' ').map((subStr, j) => {
            if (subStr.startsWith('http')) {
                return (<a key={ j } href={ subStr } className="text-blue-500 hover:underline" target='_blank' rel='noopener noreferrer'>{ subStr.split('/')[2] + ' '}</a>)
            }

            return subStr + ' ';
        });
        return (<p key={ i } className={ str === '' ? 'h-7' : `${ noWrap }  text-xs sm:text-sm md:text-base lg:text-sm xl:text-lg select-none` }>{ newStr }</p>)
    });
    
    return newText;
}

export default NewlineText ;