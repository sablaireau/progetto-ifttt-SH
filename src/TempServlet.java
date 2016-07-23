import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Iterator;
import java.io.IOException;

import java.io.PrintWriter;
import java.util.Enumeration;



/**
 * Created by kazuhira on 16/07/16.
 */
@WebServlet(name = "TempServlet")
public class TempServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("servlet: ho ricevuto una post");

        Enumeration<String> parameterNames = request.getParameterNames();
        while (parameterNames.hasMoreElements())
        {
            String paramName = parameterNames.nextElement();
            //System.out.println(paramName);
            System.out.println("\t"+paramName + ": " +  request.getParameter(paramName));
        }

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("servlet: ho ricevuto una get:" + request.getParameter("user") + " and " + request.getParameter("pass"));
        System.out.println(request.getParameterNames());
    }



}

