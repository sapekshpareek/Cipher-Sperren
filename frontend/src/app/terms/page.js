import { Box, Typography } from "@mui/material";

const TermsAndConditions = () => {
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
        Terms and Conditions
      </Typography>
      <Typography variant="body1" paragraph>
        Welcome to Cipher Sperren. By using our application, you agree to comply
        with and be bound by the following terms and conditions. Please review
        these terms carefully before using the service.
      </Typography>

      <Typography variant="h6" gutterBottom>
        1. Acceptance of Terms
      </Typography>
      <Typography variant="body1" paragraph>
        By accessing and using Cipher Sperren, you accept and agree to be bound
        by these terms and conditions. If you do not agree with any part of
        these terms, please do not use the application.
      </Typography>

      <Typography variant="h6" gutterBottom>
        2. Use of the Application
      </Typography>
      <Typography variant="body1" paragraph>
        You agree to use Cipher Sperren only for lawful purposes. You are
        responsible for all activities conducted using the application, and you
        agree not to use it for any illegal or unauthorized activities.
      </Typography>

      <Typography variant="h6" gutterBottom>
        3. User Responsibilities
      </Typography>
      <Typography variant="body1" paragraph>
        You are responsible for the security of the data you input into the
        application. While we strive to protect your information, we cannot
        guarantee complete security.
      </Typography>

      <Typography variant="h6" gutterBottom>
        4. Intellectual Property
      </Typography>
      <Typography variant="body1" paragraph>
        All content, features, and functionality of Cipher Sperren, including
        text, graphics, logos, and software, are the exclusive property of
        Cipher Sperren or its licensors and are protected by copyright,
        trademark, and other intellectual property laws.
      </Typography>

      <Typography variant="h6" gutterBottom>
        5. Limitation of Liability
      </Typography>
      <Typography variant="body1" paragraph>
        Cipher Sperren is provided "as is" and without any warranties. We are
        not liable for any damages arising from your use of the application or
        your inability to use it.
      </Typography>

      <Typography variant="h6" gutterBottom>
        6. Changes to These Terms
      </Typography>
      <Typography variant="body1" paragraph>
        We reserve the right to modify these terms at any time. Any changes will
        be effective immediately upon posting on this page, and your continued
        use of the application will constitute acceptance of the modified terms.
      </Typography>

      <Typography variant="h6" gutterBottom>
        7. Governing Law
      </Typography>
      <Typography variant="body1" paragraph>
        These terms and conditions are governed by the laws of Khilchipur. Any
        disputes arising from these terms will be resolved in the courts of
        Khilchipur.
      </Typography>

      <Typography variant="h6" gutterBottom>
        8. Contact Information
      </Typography>
      <Typography variant="body1" paragraph>
        If you have any questions about these terms, please contact us at:
        support@ciphersperren.com
      </Typography>

      <Typography variant="body1" paragraph>
        Last Updated: [22-10-2024]
      </Typography>
    </Box>
  );
};

export default TermsAndConditions;
