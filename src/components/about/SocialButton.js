import { Button, useColorModeValue } from '@chakra-ui/react';
import {
  FaDiscord,
  FaDonate,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
  FaTwitter,
} from 'react-icons/fa';

const SocialButton = ({ name, isLinktree, url }) => {
  let icon = null;
  let color = 'brand.blue';

  switch (name) {
    case 'Discord':
      icon = <FaDiscord />;
      color = '#5865F2';
      break;
    case 'Facebook':
      icon = <FaFacebookF />;
      color = '#385898';
      break;
    case 'GitHub':
      icon = <FaGithub />;
      color = '#171515';
      break;
    case 'Instagram':
      icon = <FaInstagram />;
      color = '#E1306C';
      break;
    case 'LinkedIn':
      icon = <FaLinkedinIn />;
      color = '#00A0DC';
      break;
    case 'Saweria':
      icon = <FaDonate />;
      color = '#F9A32A';
      break;
    case 'Telegram':
      icon = <FaTelegramPlane />;
      color = '#0088CC';
      break;
    default:
      icon = <FaTwitter />;
      color = '#1DA1F2';
      break;
  }

  return (
    <Button
      leftIcon={icon}
      onClick={() => window.open(url, '_blank', 'noopener, noreferrer')}
      py={isLinktree ? 7 : { base: 6, lg: 4 }}
      bg={color}
      color="brand.light"
      transition="all 0.2s ease-in-out"
      _focus={{
        bg: useColorModeValue('brand.light', 'brand.dark'),
        color,
        transform: 'translateY(-3px);',
      }}
      _hover={{
        transform: 'translateY(-3px);',
      }}
    >
      {name}
    </Button>
  );
};

export default SocialButton;
