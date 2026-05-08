'use client';

import React from 'react';
import * as S from './Styles';
import Link from 'next/link';

const RegisterPage = () => {
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
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </S.IconCircle>
                </S.HeaderIcons>
            </S.Header>

            <S.MainContent>
                <S.ImageSection>
                    <img src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000&auto=format&fit=crop" alt="Biblioteca BookVerse" />
                    <S.ImageOverlay>
                        <S.ImageTitle>Crie sua Conta no <span>BookVerse</span></S.ImageTitle>
                        <p style={{ fontSize: '1.2rem', marginBottom: '20px', opacity: 0.9 }}>Faça parte da maior comunidade de leitores e compartilhe suas histórias.</p>
                    </S.ImageOverlay>
                </S.ImageSection>

                <S.FormSection>
                    <S.FormHeader>
                        <S.FormTitle>Cadastro</S.FormTitle>
                        <S.FormSubtitle>Preencha os dados abaixo para começar.</S.FormSubtitle>
                    </S.FormHeader>

                    <S.InputGroup>
                        <S.Label>Nome Completo</S.Label>
                        <S.InputWrapper>
                            <S.InputField type="text" placeholder="Seu nome aqui" />
                        </S.InputWrapper>
                    </S.InputGroup>

                    <S.InputGroup>
                        <S.Label>E-mail</S.Label>
                        <S.InputWrapper>
                            <S.InputField type="email" placeholder="exemplo@email.com" />
                        </S.InputWrapper>
                    </S.InputGroup>

                    <S.InputGroup>
                        <S.Label>Crie sua Senha</S.Label>
                        <S.InputWrapper>
                            <S.InputField type="password" placeholder="********" />
                        </S.InputWrapper>
                    </S.InputGroup>

                    <S.InputGroup>
                        <S.Label>Confirme sua Senha</S.Label>
                        <S.InputWrapper>
                            <S.InputField type="password" placeholder="********" />
                        </S.InputWrapper>
                    </S.InputGroup>

                    <S.SubmitButton>Criar Minha Conta</S.SubmitButton>

                    <S.LoginPrompt>
                        Já tem uma conta? <Link href="/login">Entre aqui</Link>
                    </S.LoginPrompt>
                </S.FormSection>
            </S.MainContent>
        </S.PageWrapper>
    );
};

export default RegisterPage;
