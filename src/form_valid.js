const reg_text = /.{10,}/; //минимум 10 символов

function FormValid(form) {
    let text_input = form.get('text');
    return reg_text.test(text_input);
}

export {FormValid}