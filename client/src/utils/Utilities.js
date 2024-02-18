function NewlineText(overview, subID = 0) {
    const noWrap = subID === 11 ? 'whitespace-nowrap' : '';
    const text = overview.text;
    const newText = text.split('\n').map((str, i) => <p key={ i } className={ str === '' ? 'h-7' : `${ noWrap }  text-xs sm:text-sm md:text-base lg:text-sm xl:text-lg select-none` }>{ str }</p>);
    
    return newText;
}

export default NewlineText ;