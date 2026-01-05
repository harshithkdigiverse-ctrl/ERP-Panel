import DevicesOtherIcon from "@mui/icons-material/DevicesOther";
import { Box, Button, Divider, Tooltip, Typography } from "@mui/material";
import { CommonDrawer } from "../../../Common";
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const CFB = () => {
  const [open, setOpen] = useState(false);
  const url = "https://cfd.vasyerp.com/";
  const code = "4001e01767004248599438324383243832";

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(code);
  }, []);
  return (
    <>
      <Tooltip title="cfb-btn">
        <div onClick={() => setOpen(!open)} className="head-icon">
          <DevicesOtherIcon sx={{ fontSize: { xs: 20, md: 22 } }} />
        </div>
      </Tooltip>
      <CommonDrawer open={open} onClose={() => setOpen(!open)} anchor="right" width={580} title="CFD Setting" paperProps={{ className: "bg-white dark:bg-gray-800!" }}>
        <Box className="flex flex-col gap-3 text-gray-800 dark:text-gray-200">
          {/* TITLE */}
          <Typography variant="subtitle1" fontWeight={600}>
            To set up Customer Display
          </Typography>

          {/* DESCRIPTION */}
          <Typography variant="body2">
            Please open your browser in <strong>Customer Display Device</strong> and open following URL:
          </Typography>

          {/* URL */}
          <Link to={url} target="_blank" rel="noopener noreferrer" className="font-medium break-all text-brand-600">
            {url}
          </Link>

          <Divider />

          {/* CODE */}
          <Typography variant="body2" fontWeight={500}>
            Please Enter The Code:
          </Typography>

          <Box className="flex items-center gap-2">
            <Box className="px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-700 text-sm font-mono break-all flex-1">{code}</Box>

            <Button size="small" variant="contained" startIcon={<ContentCopyIcon fontSize="small" />} onClick={handleCopy}>
              Copy
            </Button>
          </Box>

          {/* IMPORTANT NOTE */}
          <Typography variant="body2" color="warning.main" fontWeight={500}>
            Important:
            <span className="ml-1 text-gray-700 dark:text-gray-300 font-normal">Please note that your customer facing display must be in same network.</span>
          </Typography>
        </Box>
      </CommonDrawer>
    </>
  );
};

export default CFB;
