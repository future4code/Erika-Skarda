exports.handler = async (event:any) => {
    const sum = event.a + event.b
	return {body: JSON.stringify({sum})}
}