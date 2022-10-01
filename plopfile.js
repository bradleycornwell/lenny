export default function (plop) {
	// create your generators here
	plop.setGenerator('component', {
		description: 'React component using Typescript and Styled Components',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'name',
			},
		],
		actions: [
			{
				type: 'addMany',
				destination: 'src/components/{{pascalCase name}}',
				templateFiles: 'src/plop-templates/component/*.hbs',
				base: 'src/plop-templates/component',
			},
		],
	});
}
