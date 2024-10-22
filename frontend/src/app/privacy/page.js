import { Box, Typography } from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <Box
      sx={{
        padding: "20px",
        maxWidth: "800px",
        margin: "0 auto",
        backgroundColor: "#f0d7f5",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Privacy Policy
      </Typography>
      <Typography variant="body1" paragraph>
        Welcome to Cipher Sperren. We are committed to protecting your privacy
        and ensuring the security of your personal information. This Privacy
        Policy explains how we collect, use, and protect your data.
      </Typography>

      <Typography variant="h6" gutterBottom>
        1. Information We Collect
      </Typography>
      <Typography variant="body1" paragraph>
        We may collect the following types of information:
      </Typography>
      <ul>
        <li>
          <Typography variant="body1">
            Data you input into the application, such as text for encryption and
            decryption.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Basic contact information if you use our support or contact
            features.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Usage data, including analytics and logs to improve the service.
          </Typography>
        </li>
      </ul>

      <Typography variant="h6" gutterBottom>
        2. How We Use Your Information
      </Typography>
      <Typography variant="body1" paragraph>
        The information collected is used for the following purposes:
      </Typography>
      <ul>
        <li>
          <Typography variant="body1">
            To provide, maintain, and improve the Cipher Sperren service.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            To communicate with you regarding any inquiries or support requests.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            To analyze usage patterns and enhance our application features.
          </Typography>
        </li>
      </ul>

      <Typography variant="h6" gutterBottom>
        3. Data Security
      </Typography>
      <Typography variant="body1" paragraph>
        We implement appropriate security measures to protect the information
        collected through Cipher Sperren. However, please note that no system
        can be completely secure, and we cannot guarantee absolute security of
        your data.
      </Typography>

      <Typography variant="h6" gutterBottom>
        4. Third-Party Services
      </Typography>
      <Typography variant="body1" paragraph>
        We may use third-party services for analytics, authentication, or other
        functionalities. These services may have their own privacy policies
        governing how they handle your data.
      </Typography>

      <Typography variant="h6" gutterBottom>
        5. Changes to This Privacy Policy
      </Typography>
      <Typography variant="body1" paragraph>
        We may update this Privacy Policy from time to time. Changes will be
        posted on this page, and the "Last Updated" date will reflect the latest
        revision.
      </Typography>

      <Typography variant="h6" gutterBottom>
        6. Contact Us
      </Typography>
      <Typography variant="body1" paragraph>
        If you have any questions or concerns about this Privacy Policy, please
        contact us at: support@ciphersperren.com
      </Typography>

      <Typography variant="body1" paragraph>
        Last Updated: [22-10-2024]
      </Typography>
    </Box>
  );
};

export default PrivacyPolicy;
