/*     Crie um objeto que simula um endereço de um cliente; 
    Propriedades: Rua, Bairro, Cidade e Estado; 
    No construtor o endereço já deve ser definido por completo;
    Crie métodos para atualizar todas as propriedades; */

    class adress{
        constructor(street, block, city, state){
            this.street = "Rua tararan tararan";
            this.block = "Bairro da laranjeira";
            this.city ="Porto Nacional";
            this.state ="Tocantins";
        }

        changeAll(streetN, blockN, cityN, StateN){
            this.street = streetN;
            this.block = blockN;
            this.city = cityN;
            this.state = StateN;
            console.log(` you chaged your adress successfully the new adress is ${this.street}, ${this.block}, ${this.city}, ${this.state} `)
        }

        changeCity(cityN){
            this.city = cityN
            console.log(` you chaged your adress successfully the new adress is ${this.street}, ${this.block}, ${this.city}, ${this.state} `)
        }

        changeState(StateN){
            this.state = StateN
            console.log(` you chaged your adress successfully the new adress is ${this.street}, ${this.block}, ${this.city}, ${this.state} `)
        }
        
        changeBlock(blockN){
            this.block = blockN
            console.log(` you chaged your adress successfully the new adress is ${this.street}, ${this.block}, ${this.city}, ${this.state} `)
        }

        changeStreet(StreetN){
            this.street = StreetN
            console.log(` you chaged your adress successfully the new adress is ${this.street}, ${this.block}, ${this.city}, ${this.state} `)
        }

    }


    const endereco = new adress()

    endereco.changeStreet("Rua do limoeiro")

    endereco.changeBlock("Aeroporto")
    
    endereco.changeCity("City of angels")
    
    endereco.changeState("São Paulo")
    
    endereco.changeAll("Rua dos 08", "Bairro do limoeiro", "Palmas", "Paraná")
