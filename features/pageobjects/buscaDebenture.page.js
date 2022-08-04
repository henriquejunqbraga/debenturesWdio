import Page from './page';

class BuscaDebenture extends Page {
  get input_busca_principal() {
    return $$('.anbima-ui-input-search__text')[2];
  }

  get resultado_busca_debenture() {
    return $('#item-nome-0');
  }

  get button_debentures() {
    return $('#form-button-option-debentures');
  }

  get button_detalhes() {
    return $('#item-button-detalhe-0');
  }

  get resultado_busca_erro() {
    return $('.title-normal');
  }

  // async pegarTextoDebenture() {
  //   await this.resultado_busca_debenture.waitForExist();
  //   return await this.resultado_busca_debenture.getText();
  // }

  async open(path) {
    return super.open(path);
  }

  async inputDebenture() {
    await this.input_busca_principal.setValue('AALM11');
    await browser.keys('Enter');
    // await this.button_debentures.click();
  }

  async inputDebentureInexistente() {
    await this.input_busca_principal.addValue('ALM1');
    await this.button_debentures.doubleClick();
  }

  async resultadoDebenture() {
    const elem = await $('#item-nome-0');
    await expect(elem).toBeDisplayed();
    // await this.resultado_busca_debenture.toBeDisplayed();
  }

  async clickDetalhes() {
    await this.button_detalhes.doubleClick();
  }
}

export default new BuscaDebenture();
