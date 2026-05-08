'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Container, ImageWrapper, LoadingContainer, LoadingBar } from './styles';

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    // Redirecionamento automático para /login após 4 segundos (tempo da animação)
    const timer = setTimeout(() => {
      router.push('/login');
    }, 4000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <Container>
      <ImageWrapper>
        <Image
          src="/illustration.png"
          alt="BookVerse Splash"
          width={800}
          height={600}
          style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
          priority
        />

        {/* Barra de carregamento centralizada na imagem */}
        <LoadingContainer>
          <LoadingBar />
        </LoadingContainer>
      </ImageWrapper>
    </Container>
  );
}
