'use client';

import React, { useState } from 'react';
import * as S from './Styles';

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <S.PageWrapper>
            <S.Header>
                <S.Logo>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                    </svg>
                    BookVerse
                </S.Logo>

                <S.SearchBarContainer>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    <input type="text" placeholder="Encontre sua próxima história..." />
                </S.SearchBarContainer>

                <S.HeaderIcons>
                    <S.IconCircle title="Upload">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="17 8 12 3 7 8"></polyline>
                            <line x1="12" y1="3" x2="12" y2="15"></line>
                        </svg>
                    </S.IconCircle>
                    <S.IconCircle title="Favoritos">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                        </svg>
                    </S.IconCircle>
                    <S.IconCircle title="Perfil">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </S.IconCircle>
                </S.HeaderIcons>
            </S.Header>

            <S.MainContent>
                <S.ImageSection>
                    <img src="/books_bg.png" alt="Biblioteca BookVerse" />
                    <S.ImageOverlay>
                        <S.ImageTitle>Sua Jornada <span>Literária</span> Começa Aqui.</S.ImageTitle>
                        <S.ButtonGroup>
                            <S.OverlayButton>Explorar Catálogo</S.OverlayButton>
                            <S.OverlayButton $secondary>Saiba Mais</S.OverlayButton>
                        </S.ButtonGroup>
                    </S.ImageOverlay>
                </S.ImageSection>

                <S.FormSection>
                    <S.FormHeader>
                        <S.FormTitle>Login</S.FormTitle>
                        <S.FormSubtitle>Bem-vindo de volta, leitor!</S.FormSubtitle>
                    </S.FormHeader>

                    <S.InputGroup>
                        <S.Label>E-mail ou Usuário</S.Label>
                        <S.InputField type="text" placeholder="exemplo@email.com" />
                    </S.InputGroup>

                    <S.InputGroup>
                        <S.Label>Sua Senha</S.Label>
                        <S.InputField 
                            type={showPassword ? "text" : "password"} 
                            placeholder="••••••••"
                        />
                    </S.InputGroup>

                    <S.CheckboxContainer>
                        <S.CheckboxGroup onClick={() => setShowPassword(!showPassword)}>
                            <input
                                type="checkbox"
                                id="showPass"
                                checked={showPassword}
                                readOnly
                            />
                            <label htmlFor="showPass">Mostrar senha</label>
                        </S.CheckboxGroup>
                        <S.ForgotPassword href="#">Esqueceu a senha?</S.ForgotPassword>
                    </S.CheckboxContainer>

                    <S.SubmitButton>Entrar na Conta</S.SubmitButton>

                    <S.RegisterPrompt>
                        Não tem uma conta? <a href="/cadastro">Cadastre-se</a>
                    </S.RegisterPrompt>
                </S.FormSection>
            </S.MainContent>
        </S.PageWrapper>
    );
}

