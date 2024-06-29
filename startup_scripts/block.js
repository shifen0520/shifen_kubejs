onEvent('block.registry', event => {
    let machine = (name, layer) => {
		let id = name.toLowerCase()
		event.create(id + '_machine')
			.model('kubejs:block/' + id + '_machine')
			.material('lantern')
			.hardness(3.0)
			.displayName(name + ' Machine')
			.notSolid()
			.renderType(layer)
	}

	machine('Andesite', "solid")
	machine('Brass', "translucent")
	machine('Copper', "cutout")

})

onEvent('block.registry', event => {
event.create('lron_gravel_base').material('wood').hardness(2.0).displayName('铁沙砾')
})