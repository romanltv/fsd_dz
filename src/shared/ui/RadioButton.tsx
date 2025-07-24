type propType = {
    id: string,
    name: string
    value: string
}


export function RadioButton({ id, name, value }: propType) {
    return (<>
        <input type="radio" id={id} name={name} value={value} />
        <label>HTML</label>
    </>);
}