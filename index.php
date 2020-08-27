<?php
	$str_browser_language = !empty($_SERVER['HTTP_ACCEPT_LANGUAGE']) ? strtok(strip_tags($_SERVER['HTTP_ACCEPT_LANGUAGE']), ',') : '';
	$str_browser_language = !empty($_GET['language']) ? $_GET['language'] : $str_browser_language;
	switch (substr($str_browser_language, 0,2))
	{
		case 'de':
			$str_language = 'de';
			break;
		case 'en':
			$str_language = 'en';
			break;
		default:
			$str_language = 'en';
	}
    
	$arr_available_languages = array();
	$arr_available_languages[] = array('str_name' => 'English', 'str_token' => 'en');
	$arr_available_languages[] = array('str_name' => 'Deutsch', 'str_token' => 'de');
    
	$str_available_languages = (string) '';
	foreach ($arr_available_languages as $arr_language)
	{
		if ($arr_language['str_token'] !== $str_language)
		{
			$str_available_languages .= '<a href="'.strip_tags($_SERVER['PHP_SELF']).'?language='.$arr_language['str_token'].'" lang="'.$arr_language['str_token'].'" xml:lang="'.$arr_language['str_token'].'" hreflang="'.$arr_language['str_token'].'">'.$arr_language['str_name'].'</a> | ';
		}
	}
	$str_available_languages = substr($str_available_languages, 0, -3);
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html lang="en" xml:lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head lang="<?php echo $str_language; ?>" xml:lang="<?php echo $str_language; ?>">
<meta http-equiv="content-type" content="text/html; charset=utf-8" />
<title>MAMP PRO</title>
<style type="text/css">
    body {
        font-family: Arial, Helvetica, sans-serif;
        font-size: .9em;
        color: #000000;
        background-color: #FFFFFF;
        margin: 0;
        padding: 10px 20px 20px 20px;
    }

    samp {
        font-size: 1.3em;
    }

    a {
        color: #000000;
        background-color: #FFFFFF;
    }

    sup a {
        text-decoration: none;
    }

    hr {
        margin-left: 90px;
        height: 1px;
        color: #000000;
        background-color: #000000;
        border: none;
    }

    #logo {
        margin-bottom: 10px;
        margin-left: 28px;
    }

    .text {
        width: 80%;
        margin-left: 90px;
        line-height: 140%;
    }
</style>
<link href="images.css" rel="stylesheet" type="text/css" />
</head>

<body>
    <p><img src="MAMP-PRO-Logo.png" id="logo" alt="MAMP PRO Logo" width="250" height="49" /></p>
    
    <!-- ADDING MY CONTENT HERE -->
    
<section id="readme" class="text">
        <h1>README</h1>
    <p>This project begins work on things that are of interest to me.&nbsp; The workflow is simple: </p>
        <ul>
          <li>Define project scope</li>
          <li>Design environments</li>
          <li>Implement GIT version control</li>
          <li>Identify features/user stories</li>
          <li>Track my progress via web site</li>
        </ul>
  </section>
    <section id="scope" class="text">
        <h2>Project: 29 Signals, LLC. CRM Integration</h2>
        <p>Educational website featuring small business apps I'm working on.  This will later track to my <a href="https://martidolce.com">martidolce.com</a> site for Ph.D work presented as case-studies or my learning.&nbsp;Below is a list of Items I'm interested in researching&nbsp;with appropriate links to projects.&nbsp; I'll need to update this in the ReadMe.</p>
        </section>
<section id="environment" class="text"><h2>Environment</h2>
    
     <p class="text"><strong>The virtual host was set up successfully.</strong></p>
    <p class="text">If you can see this page, your new virtual host was set up successfully. Now, web content can be added and this placeholder page<sup><a href="#footnote_1">1</a></sup> should be replaced or deleted.</p>
    <p class="text">
        Server name: <samp><?php echo $_SERVER['SERVER_NAME']; ?></samp><br />
        Document root: <samp><?php echo $_SERVER['DOCUMENT_ROOT']; ?></samp><br />
        Protocol: <samp>
        <?php
            if (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] != 'off') {
                echo 'https';
            } else {
                echo 'http';
            }
        ?>
        </samp>
    </p>
    <p class="text" id="footnote_1"><small><sup>1</sup> Files: <samp>index.php</samp> and <samp>MAMP-PRO-Logo.png</samp></small></p>
    <hr />
    
    
    </section>
        
        <section id="projectlist" class="text">
        <h3>Goal List</h3>
        <ul>
          <li>Create a PHP Login and Registration System from Scratch 2020<br /><a href="https://accounts.zoho.com/developerconsole" target="new">https://subscription.packtpub.com/video/Web-Development/9781800569836/</a></li>
            </ul>
            
          </li>
          </ul>
       
        <p>&nbsp;</p>
        <p>&nbsp;</p>
    </section>
<!-- END MY CONTENT HERE -->
</body>
</html>
