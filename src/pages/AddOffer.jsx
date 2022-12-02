import React from 'react'

import { useState } from 'react'

// Get user from localstorage
function AddOffer() {
  const [offer, setOffer] = useState({})

  const formData = new FormData()

  formData.append('title', offer.title)
  formData.append('offerType', offer.type)
  formData.append('category', offer.category)
  formData.append('text', offer.text)
  formData.append('amountMony', offer.amountMony)
  formData.append('status', offer.status)

  const handleForm = (e) => {
    e.preventDefault()

    console.log(offer)
  }

  const handleInput = ({ currentTarget }) => {
    const { name, value } = currentTarget
    setOffer({
      ...offer,
      [name]: value,
    })
  }

  return (
    <>
      <section className="heading">
        <h1>Publier un troc</h1>
      </section>
      <form onSubmit={handleForm} className="container p-6">
        <div className="form-group">
          <label className="label"> Sélectionnez le type de troc.</label>
          <select onChange={handleInput} name="type" className="form-control">
            <option value={'OFFER'}>je vend</option>
            <option value={'DEMANDE'}>je recherche</option>
          </select>
        </div>
        <div className="form-group">
          <label className="label">
            Sélectionnez la catégorie de votre troc.
          </label>
          <div className="form-control">
            <div>
              <select onChange={handleInput} name="category">
                <option>Catégories</option>
                {/* {categories.entities
                ? categories.entities.map((category) => (
                    <option key={category._id} value={category._id}>
                    {category.name}
                    </option>
                    ))
                : ''} */}
              </select>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label className="label">Titre de votre troc</label>
          <div className="control">
            <input
              name="title"
              onChange={handleInput}
              className="form-control"
              type="text"
              placeholder="Titre de votre annonce"
            />
          </div>
        </div>
        <div class="form-group">
          <label class="label"> Decrivez votre troc</label>
          <div class="form-control">
            <textarea
              name="text"
              onChange={handleInput}
              class="textarea"
              placeholder="décrivez votre annonce"
            ></textarea>
          </div>
        </div>
        <div class="form-group">
          <label class="label"> Prix de votre troc </label>

          <input
            name="amountMony"
            onChange={handleInput}
            className="form-control"
            type="number"
            placeholder="Prix de l'annonce"
          />
          {/* <img className="littleCoins" src={Coins} alt="" /> */}
        </div>

        <div className="form-group">
          <label class="label">Ajouter des photos</label>
          <div class="file has-name mb-4">
            <label class="file-label">
              <input
                className="form-control"
                type="file"
                name="resume"
                multiple="multiple"
              />
              {/* <span class="file-cta">
              <span class="file-icon">
              <FaUpload />
              </span>
              <span class="file-label">Choose a file…</span>
              </span>
            <span class="file-name"></span> */}
            </label>
          </div>
        </div>

        <div class="form-group">
          <label class="label">Ville ou code postal</label>
          <div class="control">
            <input
              class="form-control"
              type="text"
              placeholder="ville ou code postal"
            />
          </div>
        </div>

        <div class="form-group">
          <label class="label">Complément d'adresse</label>
          <div class="form-control">
            <input
              class="input is-large"
              type="text"
              placeholder="complément d'adresse"
            />
          </div>
        </div>
        {/* <div class="form-group">
        <label class="label">Brouillon</label>
        <div class="form-control">
        <div class="select is-large">
        <select onChange={handleInput} name="status">
        <option>OPEfsdfsN</option>
        <option value={'OPEN'}>OPEN</option>
        </select>
        </div>
        </div>
    </div> */}
        <div class="form-group">
          <button class="btn btn-block">Publier</button>
        </div>
        <div class="form-group">
          <button class="btn btn-block btn-danger">Annuler</button>
        </div>
      </form>
    </>
  )
}

export default AddOffer
