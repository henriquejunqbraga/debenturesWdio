import { Given, When, Then } from '@wdio/cucumber-framework';

import BuscaDebenture from '../pageobjects/buscaDebenture.page';

Given(/^que estou na homepage da anbima$/, async () => {
  await BuscaDebenture.open("/");
});

// -------------Quando-------------

When(/^realizo uma busca pela debênture "AALM11"$/, async () => {
  await BuscaDebenture.inputDebenture();
});

When(/^realizo uma busca por código B3 "ALM1"$/, async () => {
  await BuscaDebenture.inputDebentureInexistente();
});

When(/^realizo uma busca pelo código B3 "AALM11"$/, async () => {
  await BuscaDebenture.inputDebenture();
});

When(/^acesso ver detalhes$/, async () => {
  await BuscaDebenture.clickDetalhes();
});

// -------------Então-------------

Then(/^visualizo a debênture "AALM11" no resultado da busca$/, async () => {
  // await BuscaDebenture.resultado_busca_debenture();
  await expect(BuscaDebenture.resultado_busca_debenture).toBeDisplayed();
  // expect(await BuscaDebenture.pegarTextoDebenture()).to.equal('AALM11');
});

Then(/^visualizo uma mensagem e uma opção para seguir o fluxo$/, async () => {
  // await BuscaDebenture.resultado_busca_erro();
  await expect(BuscaDebenture.resultado_busca_erro).toBePresent();
});

Then(/^visualizo características da debênture$/, async () => {
  // await BuscaDebenture.resultado_busca_debenture();
  await expect(BuscaDebenture.resultado_busca_debenture).toExist();
});
